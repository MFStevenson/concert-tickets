import express from "express";
import request from "request";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  request(
    {
      url: "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=ZANfyTO7Sv3wE8YIlWtN8LSpXgdH8FDY",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      res.json(JSON.parse(body));
    }
  );
});
const { PORT = 9090 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));

export default app;
