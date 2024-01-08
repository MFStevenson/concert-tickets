import axios from "axios";
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
export const getUser = () => {};

export const postUser = () => {};

// will post to ticket database
export const buyTicket = () => {};
