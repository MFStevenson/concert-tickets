import { useState, useEffect } from "react";
import { getConcertDetails } from "../utils/api";
import { useParams } from "react-router";

import Concert from "../components/concerts/Concert";

const ConcertPage = () => {
  const { concert_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [concertDetails, setConcertDetails] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getConcertDetails(concert_id)
      .then((res) => {
        setConcertDetails(res.data);
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

  return <Concert concertDetails={concertDetails} />;
};

export default ConcertPage;
