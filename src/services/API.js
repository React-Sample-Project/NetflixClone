import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Content-Type"] = "application/json";

const API = async ({
  url,
  method = "GET",
  headers,
  data: requestParams,
  onSuccess,
  onFailure,
}) => {
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
  requestParams = {
    ...requestParams,
    api_key: process.env.REACT_APP_API_KEY,
  };
  try {
    const { status, data, statusText } = await axios.request({
      url,
      method,
      headers,
      validateStatus: (status) => status < 500,
      [dataOrParams]: requestParams,
    });
    if (status === 404) {
      const error = { error: statusText };
      throw error;
    }
    return data;
  } catch (e) {
    return e;
  }
};
export default API;
