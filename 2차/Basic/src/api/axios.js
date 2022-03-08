import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "33252256be1722b98d7c20fbcc7fab5d",
    language: "ko-KR",
  },
});

export default instance;
