import API from "./API";

const localStorage = window.localStorage;

const account = {
  getUserInfo: () => JSON.parse(localStorage.getItem("userInfo")),

  getAccountDetails: async (sessionId) => {
    const user = await API({
      url: "account",
      data: {
        session_id: sessionId,
      },
    });
    localStorage.setItem("userInfo", JSON.stringify(user));
  },

  addToWatchList: async (mediaId, mediaType) => {
    const { id } = account.getUserInfo();
    if (id) {
      const response = await API({
        url: `account/${id}/watchlist`,
        method: "POST",
        isSessionRequired: true,
        data: {
          media_type: mediaType,
          media_id: mediaId,
          watchlist: true,
        },
      });
      return response;
    }
  },

  getWatchList: async () => {
    const { id } = account.getUserInfo();
    if (id) {
      const url = `account/${id}/watchlist`;
      const movies = await API({
        url: `${url}/movies`,
        isSessionRequired: true,
      });
      const tv = await API({
        url: `${url}/tv`,
        isSessionRequired: true,
      });
      return {
        movies,
        tv,
      };
    }
  },
};

export default account;
