import axios from "axios";
const backendApi = axios.create({
  baseURL: "https://api20240108135812.azurewebsites.net/api",
});
const apiKey = "ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY";
const apiSecret = "a3Wi6pMh7CRBNDyx";

const api = axios.create({
  baseURL: "http://localhost:9090/",
});

export const getConcerts = () => {
  return api.get(
    "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&keyword=concert&apikey=ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY"
  );
};

export const getConcertDetails = (concert_id) => {
  return api.get(
    `https://app.ticketmaster.com/discovery/v2/events/${concert_id}.json?&apikey=ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY`
  );
};

// non-ticketmaster functionality
export const getUser = (username) => {
  return backendApi.get(`/users/${username}`);
};

export const postUser = (postBody) => {
  return backendApi
    .post("/users", postBody)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// will post to ticket database
export const buyTicket = () => {};
