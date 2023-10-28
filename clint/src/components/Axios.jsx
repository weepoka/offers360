import axios from "axios";

const Api = axios.create({
  baseURL: "https://server.offers360degree.com",
});

export default Api;
