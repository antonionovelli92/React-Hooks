import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);



  const reset = () => {
    setContatore(0);
  };


  const aumenta = () => {
    setContatore((oldValue) => {
      return oldValue + 1;
    })
  }

  return (
    <div className="bg-white shadow rounded-5 py-5 w-50 col-6 offset-3">
      <h3> {contatore}</h3>
      <div className="d-flex justify-content-between px-2">
        <button className="button my-2" onClick={() => setContatore(contatore - 1)}>DIMINUISCI</button>
        <button className="button my-2" onClick={aumenta}>AUMENTA</button>
      </div>
      <button className="button reset-button my-2" onClick={reset}>RESET</button>
    </div>
  );
};

export default CounterComponent;
