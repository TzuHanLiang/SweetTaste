import axios from "axios";

const instance = axios.create({
  baseURL: "https://sweet-taste.firebaseio.com"
});

export default instance;
