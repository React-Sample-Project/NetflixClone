import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Content-Type"] = "application/json";
const API = async ({
  url,
  isSessionRequired,
  method = "GET",
  headers = {},
  cancelToken,
  data: requestParams,
  onSuccess,
  onFailure,
}) => {
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
  requestParams = {
    ...requestParams,
  };
  const sessionId = window.localStorage.getItem("userSession");
  try {
    const { status, data, statusText } = await axios.request({
      url: `${url}?api_key=${process.env.REACT_APP_API_KEY}${
        isSessionRequired && sessionId ? `&session_id=${sessionId}` : ""
      }`,
      method,
      cancelToken,
      headers,
      // headers: { ...headers, "Cache-Control": "no-cache" },
      validateStatus: (status) => status < 500,
      [dataOrParams]: requestParams,
    });
    if (status === 404) {
      const error = { error: statusText };
      throw error;
    }
    return data;
  } catch (e) {
    // if (axios.isCancel(e)) {
    //   console.log("Request cancelled " + e.message);
    // }
    return e;
  }
};
export default API;
