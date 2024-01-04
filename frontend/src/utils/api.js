import axios from "axios";
const apiKey = "ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY";
const apiSecret = "a3Wi6pMh7CRBNDyx";

const api = axios.create({
  baseURL: "http://localhost:9090",
});

export const getConcerts = () => {
  return api.get("/");
};
