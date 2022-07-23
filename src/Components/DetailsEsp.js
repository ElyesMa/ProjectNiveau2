import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'

const DetailsEsp = () => {
    const navigate=useNavigate()
    let Details=useSelector(state=>state.CurrentDayReducer)
  return (
    <div>
    <p>Détails Caisse Espèces : __________________________________________ close <AiFillCloseCircle onClick={()=>{navigate("/Register")}} style={{color:"red"}}/></p>
    <p>Caisse Dinars : {Details.CaisseEsp.Dinars}</p>
    <p>Caisse Euros : {Details.CaisseEsp.Euros.Montant} - Eq.en Dt : {Details.CaisseEsp.Euros.EqDt}</p>
    <p>Caisse Dollars :{Details.CaisseEsp.Dollars.Montant} - Eq.en Dt : {Details.CaisseEsp.Dollars.EqDt}</p>

    </div>
  )
}

export default DetailsEsp