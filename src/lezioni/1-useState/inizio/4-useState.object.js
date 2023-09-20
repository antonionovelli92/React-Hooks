import React, { useState } from "react";

const StateObject = () => {
  // const [nome, setName] = useState('Antonio');
  // const [age, setAge] = useState(31);
  // const [saluto, setSaluto] = useState('ciao');


  // // provo a cambiare saluto
  // const cambiaSaluto = () => {
  //   setSaluto('Sono io, Buongiorno');
  //   setAge(32);
  // }


  const [person, setPerson] = useState({
    nome: 'Antonio',
    age: 31,
    saluto: 'ciao',
  });

  const cambiaSaluto = () => {
    setPerson({
      // spread operator '...' per mantenere le altre proprietà
      ...person,
      age: 32,
      saluto: 'Sono io, Buongiorno',
    })
  };


  return <div className="item shadow">
    <div className="text-left">
      <h5>{person.nome}</h5>
      <h5>{person.age}</h5>
      <h5>{person.saluto}</h5>
    </div>
    <button className="button" onClick={cambiaSaluto}>
      Cambia il Saluto
    </button>
  </div>;
};

export default StateObject;
