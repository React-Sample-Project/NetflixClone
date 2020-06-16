import API from "./API";
const localStorage = window.localStorage;

const auth = {
  getRequestToken: async () =>
    await API({
      url: "/authentication/token/new",
    }),
  verifyGoogleCaptcha: async (token) => {
    const response = await API({
      url: "https://www.google.com/recaptcha/api/siteverify",
      method: "POST",
      data: {
        secret: process.env.REACT_APP_GOOGLE_CAPTCHA_SECRET_KEY,
        response: token,
      },
    });
    console.log(response);
  },
  isAuthenticated: () =>
    !!localStorage.getItem("userSession") ||
    !!localStorage.getItem("guestSession"),

  authenticateUser: async ({ username, password }) => {
    let loginSuccess = auth.isAuthenticated();
    if (!loginSuccess) {
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
            loginSuccess = true;
            localStorage.setItem("userSession", session_id);
          }
        }
        return {
          success: loginSuccess,
          statusCode,
          statusMessage: statusMessage || sessionStatus,
        };
      }
    }
    return {
      success: loginSuccess,
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
