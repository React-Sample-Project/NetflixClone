import API from "./API";
const localStorage = window.localStorage;

const auth = {
  getRequestToken: async () =>
    await API({
      url: "/authentication/token/new",
    }),

  isAuthenticated: () =>
    !!localStorage.getItem("userSession") ||
    !!localStorage.getItem("guestSession"),

  authenticateUser: async ({ name, password }) => {
    let loginSuccess = auth.isAuthenticated();
    if (!loginSuccess) {
      const { request_token } = await auth.getRequestToken();
      if (request_token) {
        const { success } = await API({
          url: "authentication/token/validate_with_login",
          method: "POST",
          data: {
            username: name,
            password,
            request_token: request_token,
          },
        });
        if (success) {
          const { session_id } = await API({
            url: "authentication/session/new",
            method: "POST",
            data: {
              request_token: request_token,
            },
          });
          localStorage.setItem("userSession", session_id);
          loginSuccess = true;
        }
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
    console.log(guest_session_id);
    if (success) {
      localStorage.setItem("guestSession", guest_session_id);
    }
    return {
      success,
    };
  },
};

export default auth;
