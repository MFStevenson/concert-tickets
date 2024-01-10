import axios from "axios";
const backendApi = axios.create({
  baseURL: "https://api20240108135812.azurewebsites.net/api",
});

const ticketmasterApi = axios.create({
  baseURL: "http://localhost:9090/",
});

export const getConcerts = () => {
  return ticketmasterApi.get(
    "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&keyword=concert&apikey=ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY"
  );
};

export const getConcertDetails = (concert_id) => {
  return ticketmasterApi.get(
    `https://app.ticketmaster.com/discovery/v2/events/${concert_id}.json?&apikey=ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY`
  );
};

// non-ticketmaster functionality
export const getUser = (username) => {
  return backendApi.get(`/users/${username}`).catch((err) => {});
};

export const postUser = (postBody) => {
  return backendApi.post("/users", postBody).catch((err) => {
    console.log(err);
    return Promise.reject({
      status: err.response.status,
      msg: err.response.data.msg,
    });
  });
};

export const getUserTickets = (uid) => {
  return backendApi.get(`/tickets/user/${uid}`);
};

export const buyTicket = (postBody) => {
  return backendApi.post(`/tickets`, postBody).catch((err) => {
    console.log(err);
    return Promise.reject({
      status: err.response.data.status,
      msg: err.response.data.title,
    });
  });
};

export const transferTicket = (patchBody) => {
  return backendApi.patch(`/tickets`, patchBody).catch((err) => {
    console.log(err);
    return Promise.reject({
      status: err.response.data.status,
      msg: err.response.data.title,
    });
  });
};

export const getUserProfile = (uid) => {
  return backendApi.get(`/users/userprofile/${uid}`);
};

export const updateProfile = (patchBody) => {
  return backendApi.patch(`/userprofile`, patchBody).catch((err) => {
    console.log(err);
    return Promise.reject({
      status: err.response.data.status,
      msg: err.response.data.title,
    });
  });
};
