import API from "./API";
import { formatResponse } from "./Media";
import { getCorrectedMediaType } from "../utils";

const localStorage = window.localStorage;

const account = {
  getUserInfo: () => JSON.parse(localStorage.getItem("userInfo")),
  isValidated: false,
  getAccountDetails: async (sessionId) => {
    account.isValidated = true;
    const user = await API({
      url: "account",
      data: {
        session_id: sessionId,
      },
    });
    localStorage.setItem("userInfo", JSON.stringify(user));
    return user;
  },

  updateAccountStates: async (mediaId, mediaType, keyName, value) => {
    const { id } = account.getUserInfo();
    const extractedMediaType = getCorrectedMediaType(mediaType);
    if (id) {
      const response = await API({
        url: `account/${id}/${keyName}`,
        method: "POST",
        isSessionRequired: true,
        data: {
          media_type: extractedMediaType,
          media_id: mediaId,
          [keyName]: value,
        },
      });
      return response;
    }
  },

  getUserPersonalization: async (type, infoType) => {
    const { id } = account.getUserInfo();
    if (id) {
      const media = await API({
        url: `account/${id}/${infoType}/${type}`,
        isSessionRequired: true,
      });
      return formatResponse(media);
    }
  },


};

export default account;
