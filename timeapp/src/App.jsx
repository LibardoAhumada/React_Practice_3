import { useState } from "react";
import './App.css'
import moment from "moment"; 
import PersonCard from "./components/PersonCard";

function App() {
  const [persons, setPersons] = useState([]);
  const [personName, setPersonName] = useState("");
  const [personPicture, setPersonPicture] = useState("");
  const [personDate, setPersonDate] = useState("");

  function ageCalculation(dateOfBirth) {
    const dateOfBrithMoment = moment(dateOfBirth, 'YYYY-MM-DD');
    const actualDate = moment();
    const years = actualDate.diff(dateOfBrithMoment, 'years');
    return years;
  }

  function daysUntilBirthday(dateOfBirth) {
    const dateOfBirthMoment = moment(dateOfBirth, 'YYYY-MM-DD');
    const today = moment();
    const nextBirthday = dateOfBirthMoment.clone().year(today.year());
    if (nextBirthday.isBefore(today)) {
      nextBirthday.add(1, 'year');
    }
    const daysUntil = nextBirthday.diff(today, 'days');
    return daysUntil;
  }



  const addPerson = () => {
    let person = {
      name: personName,
      dateOfBirth: personDate,
      image: personPicture,
    };
    setPersons([person, ...persons]);
  };

  return (
    <>
     <div className="row p-3 rounded">
      <div className="w-100 text-center  align-items-center rounded">
        <div className="d-flex p-3 mb-2 bg-primary text-white text-center d-flex align-items-center justify-content-center rounded">
          <h1>Practica React:</h1>          
        </div>
        <div className="d-flex p-3 mb-2 bg-primary text-white text-center d-flex align-items-center justify-content-center rounded">
          <h4>Uso de Libreria moment, cración de usuario y Mostrar en cards</h4>          
        </div>
      </div>
    </div>

      
    

      <div className="row">
        <div className="col-6">
          <form className='p-3 bg-dark text-white m-3 rounded'>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Nombre</label>
              <input type="text" className="form-control" aria-describedby="emailHelp" name="name" onChange={(event) => setPersonName(event.target.value)} value={personName} />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Fecha de Cumpleaños</label>
              <input type="date" className="form-control" name="dateOfBirth" onChange={(event) => setPersonDate(event.target.value)} value={personDate} />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Imagen</label>
              <input type="text" className="form-control" name='image' onChange={(event) => setPersonPicture(event.target.value)} value={personPicture} />
            </div>

            <button type="button" className="btn btn-primary" onClick={addPerson}>Save</button>
            <h5>link de fotos de Preubas:</h5>
            <h5>https://randomuser.me/api/portraits/men/30.jpg</h5>
            <h5>https://randomuser.me/api/portraits/women/88.jpg</h5>
          </form>
        </div>

        <div className="col-6">
          {persons.map((person) => {
            const { name, dateOfBirth, image } = person;
            const age = ageCalculation(dateOfBirth);
            const daysUntil = daysUntilBirthday(dateOfBirth);
            return (
              <PersonCard key={name} name={name} dateOfBirth={dateOfBirth} image={image} age={age} daysUntil={daysUntil} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App;
