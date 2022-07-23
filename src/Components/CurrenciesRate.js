import {useState , useEffect} from "react"
import axios from 'axios';
import {updateCurrencies} from '../actions/CurrentDayActions'
import { useDispatch } from 'react-redux'

function CurrenciesRate() {
    const [error, setError] = useState(null);
    const dispatch=useDispatch()
    const Currencies=["",""]
    useEffect(() => {

    axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
    .then(function (response) {
      console.log(response)
      Currencies[0]=response.data.eur.tnd;
    })
    axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    .then(function (response) {
      console.log(response)
      Currencies[1]=response.data.usd.tnd;
      dispatch(updateCurrencies(Currencies));

    })
    .catch(function (error) {
      setError(error);
    })
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else {
      return (
       <div>
          
       </div>
      );
    }
  }
  
  
  export default CurrenciesRate