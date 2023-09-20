import React, { useState } from "react";
import { data } from "../../../data"



const ArrayState = () => {
  const [people, setPeople] = useState(data);
  console.log(people);


  // Dichiaro una funzione che mi permette di eliminare i miei elementi
  const removeItem = (id) => {
    // Creo un nuovo arrey filtrato con i nuovi id
    let newPeople = people.filter(el => el.id !== id);
    setPeople(newPeople);
  }



  return (
    <>
      {
        people.map(el => {
          const { id, name } = el
          return (
            <div key={id} className="item shadow">
              <h5>{name}</h5>
              <button type="button" className="button delete-button"
                // funzione anonima per far eseguire il comando al click e non al caricamento della pagina
                onClick={() => removeItem(id)}>
                x
              </button>
            </div>
          )
        })
      }
    </>
  );
};

export default ArrayState;
