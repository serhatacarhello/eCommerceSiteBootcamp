import axios from "axios";

const useApi = () => {
  const api = axios.create();
  api.defaults.baseURL = "https://ecommerce.udemig.dev/api/v2/";
  // api.defaults.baseURL = "https://master.demo.sylius.com/api/v2/";
  api.defaults.headers["accept"] = "application/json";
  //   api.defaults.headers.accept = "application/json";
  //   api.defaults.headers.keep-Alive = "true"
  return api;
};

export default useApi;
