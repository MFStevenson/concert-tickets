import { Link, useParams } from "react-router-dom";

const BuyUnsuccessfulPage = () => {
  const { concert_id } = useParams();
  return (
    <>
      <h2>Sorry your purchase was unsuccessful</h2>
      <p>Please try again</p>
      {/* link back to concert page */}
      <Link to={`/concerts/${concert_id}/buy`}>View Concert</Link>
    </>
  );
};

export default BuyUnsuccessfulPage;
