import React, { useEffect, useState } from 'react'
import "../Dropdown/dropdown.css"

export const Dropdown = () => {

  const Countries = [
    {id : 1 , name : "India"},
    {id : 2, name : "USA"},
    { id: 3, name: "Australia" },
    { id: 4, name: "Canada" },
    { id: 5, name: "Germany" },
    { id: 6, name: "France" },
    { id: 7, name: "Japan" },
    { id: 8, name: "Mexico" },
    { id: 9, name: "Spain" },
    { id: 10, name: "Italy" },
    { id: 11, name: "Brazil" },
    { id: 12, name: "South Africa" }
  ];

  const Capital = [
    {id : 1 ,countryId:1, name : "Delhi"},
    {id : 2, countryId:2 ,name : "Washington, D.C"},
    { id: 3, countryId: 3, name: "Canberra" },
    { id: 4, countryId: 4, name: "Ottawa" },
    { id: 5, countryId: 5, name: "Berlin" },
    { id: 6, countryId: 6, name: "Paris" },
    { id: 7, countryId: 7, name: "Tokyo" },
    { id: 8, countryId: 8, name: "Mexico City" },
    { id: 9, countryId: 9, name: "Madrid" },
    { id: 10, countryId: 10, name: "Rome" },
    { id: 11, countryId: 11, name: "Brasília" },
    { id: 12, countryId: 12, name: "Pretoria" }
  ];

  const handleCountry = (id) =>{
    const cp = Capital.filter(x => x.countryId == id)
    setCapital(cp);
  }

  const handleVisible = () =>{
    setVisisble(true);
  }

  const handleLeave =() =>{
    setVisisble(false);
  }

const [country , setCountry] = useState([]);
const [capital,setCapital] = useState([]);
const[visible, setVisisble] = useState(false);


useEffect (() => {
  setCountry(Countries);
},[])
  return (
    <div className='Body'>
      <select onChange={(e) => handleCountry(e.target.value)} onMouseEnter={handleVisible} onMouseLeave={handleLeave}>
        <option value = "0" hidden>Select Countries</option>
        {
          country && country !== undefined ? country.map((ctr, index) =>{
            return(
              <option key={index} value={ctr.id}>{ctr.name}</option>


            )
          })
          :"Please Select a Country"
        }
      </select>
      <br />  
      <select >
        <option value = "0" hidden>Capital</option>
        {
          capital && capital !== undefined ? capital.map((ctr, index) =>{
            return(
              <option key={index} value={ctr.id}>{ctr.name}</option>


            )
          })
          :"Please Select a Country"
        }
      </select>
    </div>
  )
}
