import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-e872a.cloudfunctions.net/api",
  timeout: 1000,
});

export default instance;

// https://us-central1-clone-e872a.cloudfunctions.net/api - deployed
// http://localhost:5001/clone-e872a/us-central1/api - local
