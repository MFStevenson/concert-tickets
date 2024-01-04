import axios from "axios";

const apiKey = "ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY";
const apiSecret = "a3Wi6pMh7CRBNDyx";

const api = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2/",
  //withCredentials: false,
  headers: {
    secret: apiSecret,
    //crossDomain: true,
  },
  params: {
    apikey: apiKey,
  },
});

//axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
//axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     proxy("/api", {
//       target: "https://app.ticketmaster.com/discovery/v2",
//       logLevel: "debug",
//       changeOrigin: true,
//     })
//   );
// };

export const getConcerts = () => {
  return api
    .get("/events.json?", { headers: { "Access-Control-Allow-Headers": "*" } })
    .then((response) => {
      return response.data._embedded.events;
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
      throw error;
    });
};
