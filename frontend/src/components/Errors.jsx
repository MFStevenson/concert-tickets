import "../styling/ErrorPage.css"
const Errors = ({ status, msg }) => {
  return (
    <div className ="error-area"> 
    <div id="error">
      <h2> Error Occurred</h2>
      <section className ="error-content"> 
      <p>Status code: {status}</p>
      <p> {msg}</p>
      </section>
    </div>
    </div>
  );
};

export default Errors;
