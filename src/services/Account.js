import API from "./API";
import { formatResponse } from "./Media";

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

  updateAccountStates: async (mediaId, mediaType, keyName, value) => {
    const { id } = account.getUserInfo();
    if (id) {
      const response = await API({
        url: `account/${id}/${keyName}`,
        method: "POST",
        isSessionRequired: true,
        data: {
          media_type: mediaType,
          media_id: mediaId,
          [keyName]: value,
        },
      });
      return response;
    }
  },

  getWatchList: async (type) => {
    const { id } = account.getUserInfo();
    if (id) {
      const media = await API({
        url: `account/${id}/watchlist/${type}`,
        isSessionRequired: true,
      });
      return formatResponse(media);
    }
  },

  getStates: async (mediaType, mediaId) => {
    if (mediaId && mediaType) {
      return await API({
        url: `${mediaType}/${mediaId}/account_states`,
        isSessionRequired: true,
      });
    }
  },
};

export default account;
