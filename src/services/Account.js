import API from "./API";

export const getAccountDetails = async (sessionId) =>
  await API({
    url: "account",
    data: {
      session_id: sessionId,
    },
  });
