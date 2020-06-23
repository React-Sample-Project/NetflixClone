import API from "./API";
import account from "./Account";
const localStorage = window.localStorage;

const auth = {
  getRequestToken: async () =>
    await API({
      url: "/authentication/token/new",
    }),
  // verifyGoogleCaptcha: async (token) => {
  //   const response = await API({
  //     url: "https://www.google.com/recaptcha/api/siteverify",
  //     method: "POST",
  //     data: {
  //       secret: process.env.REACT_APP_GOOGLE_CAPTCHA_SECRET_KEY,
  //       response: token,
  //     },
  //   });
  // },
  getSessionId: () => auth.getUserSession() || auth.getGuestSession(),
  getGuestSession: () => localStorage.getItem("guestSession"),
  getUserSession: () => localStorage.getItem("userSession"),
  isSessionValidated: null,
  isAuthenticated: async () => {
    let returnValue = null;
    const sessionId = auth.getUserSession();
    if (sessionId) {
      const { username } = account.isValidated
        ? account.getUserInfo()
        : await account.getAccountDetails(sessionId);
      returnValue = !!username;
    } else {
      returnValue = !!auth.getGuestSession() || false;
    }

    return (auth.isSessionValidated = returnValue);
  },
  removeUserAuth: () => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("guestSession");
    localStorage.removeItem("userInfo");
    account.isValidated = auth.isSessionValidated = false;
  },
  logout: async () => {
    const success = await API({
      url: "authentication/session",
      method: "DELETE",
      data: {
        session_id: auth.getSessionId(),
      },
    });
    if (success) {
      auth.removeUserAuth();
      return true;
    }
    return false;
  },
  authenticateUser: async ({ username, password }) => {
    auth.isSessionValidated = await auth.isAuthenticated();
    if (!auth.isSessionValidated) {
      const { request_token } = await auth.getRequestToken();
      let sessionStatus;
      if (request_token) {
        const {
          success,
          status_code: statusCode,
          status_message: statusMessage,
        } = await API({
          url: "authentication/token/validate_with_login",
          method: "POST",
          data: {
            username,
            password,
            request_token: request_token,
          },
        });
        if (success) {
          const { session_id, status_message } = await API({
            url: "authentication/session/new",
            method: "POST",
            data: {
              request_token: request_token,
            },
          });
          sessionStatus = status_message;
          if (session_id) {
            auth.isSessionValidated = true;
            await account.getAccountDetails(session_id);
            localStorage.setItem("userSession", session_id);
          }
        }
        return {
          success: auth.isSessionValidated,
          statusCode,
          statusMessage: statusMessage || sessionStatus,
        };
      }
    }
    return {
      success: auth.isSessionValidated,
    };
  },
  createGuestSession: async () => {
    const { success, guest_session_id } = await API({
      url: "authentication/guest_session/new",
    });
    if (success) {
      localStorage.setItem("guestSession", guest_session_id);
    }
    return {
      success,
    };
  },
};

export default auth;
