import axios from "axios";
const KEY = "AIzaSyB8Wc_XLF3nHw9N5URPqW_MS4Tphl21mCI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
