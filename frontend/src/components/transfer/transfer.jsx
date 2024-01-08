



const Transfer = () => {

    const handleConfirm = (event) => {
        event.preventDefault();
        if (window.confirm("Are you sure you want to submit?")) {
         //submit coding here
        }
      };

  return (
  <div> 
  <h2> Transfer </h2>


  <button onClick = {handleConfirm} > 
    Confirm
  </button>




  </div>
  )
}
;

export default Transfer;
