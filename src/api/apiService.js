import axios from "axios";

const API_URL = "https://localhost:7271/api";

const callApi = (endpoint, method = "GET", body) => {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((e) => {
    console.log(e);
  });
};

const GET_ALL_CATEGORIES = (endpoint) => {
  return callApi(endpoint, "GET");
};

const GET_ALL_PRODUCTS = (endpoint) => {
  return callApi(endpoint, "GET");
};

const GET_PRODUCT_ID = (endpoint, id) => {
  return callApi(`${endpoint}/${id}`, "GET");
};
const POST_ADD_PRODUCT = (endpoint, data) => {
  return callApi(endpoint, "POST", data);
};
const PUT_EDIT_PRODUCT = (endpoint, data) => {
  return callApi(endpoint, "PUT", data);
};
const DELETE_PRODUCT_ID = (endpoint) => {
  return callApi(endpoint, "DELETE");
};
export {
  callApi,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_ID,
  POST_ADD_PRODUCT,
  PUT_EDIT_PRODUCT,
  DELETE_PRODUCT_ID,
  GET_ALL_CATEGORIES,
};
