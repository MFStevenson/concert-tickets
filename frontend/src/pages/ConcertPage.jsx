import { useState, useEffect, useContext } from "react";
import { getConcertDetails } from "../utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Concert from "../components/concerts/Concert";

const ConcertPage = () => {
  const { user } = useContext(UserContext);
  const { concert_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [concertDetails, setConcertDetails] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getConcertDetails(concert_id)
      .then((res) => {
        setConcertDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching concert details:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h2>{concertDetails.name}</h2>
      <p className="concert-date">
        {" "}
        Date: {concertDetails.dates.start.localDate}
      </p>
      <p> Start Time: {concertDetails.dates.start.localTime}</p>
      <img
        className="concert-image"
        src={concertDetails.images[0].url}
        alt={`${concertDetails.name} image`}
      />
      <Link to={`/concerts/${concertDetails.id}/buy`}>Buy Ticket</Link>
      {Object.keys(user).length ? (
        <Link to={`/concerts/${concertDetails.id}/buy`}>Buy Ticket</Link>
      ) : null}
    </>
  );
};

export default ConcertPage;
