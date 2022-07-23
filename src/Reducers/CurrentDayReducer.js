import {AddCash , UpdateCurrencies ,AddChq,EditChq, RemoveChq ,AddDep,EditDep,RemoveDep,AddInvoice} from '../actions/types'
import { v4 as uuidv4 } from 'uuid';


let initState = 
  {
    "CurrenciesRate":{
        "Euros":0,
        "Dollars":0,
    },
    "CaisseEsp":
        {
       "Dinars":0, 
       "Euros":{
                "Montant":0,
                "EqDt":0,
                },
       "Dollars":{
        "Montant":0,
        "EqDt":0,
        },

         },
    
    
    "CaisseChq":"",
    "CaisseTraite":"",
    "CaisseDep":"",
    "Invoices":"",

    }


    const CurrentDayReducer = (state=initState, action) => {
        switch (action.type) {
            case AddCash: return(
                action.payload[0]==="Dinars"?
                {...state,CaisseEsp:{...state.CaisseEsp,Dinars:Number(state.CaisseEsp.Dinars)+Number(action.payload[1])}}
                :
                action.payload[0]==="Dollars"?
                {...state,CaisseEsp:{...state.CaisseEsp,Dollars:{...state.Dollars,Montant:Number(state.CaisseEsp.Dollars.Montant)+Number(action.payload[1]),
                EqDt:Number(state.CaisseEsp.Dollars.EqDt)+Number(action.payload[2])}}}
                :
                action.payload[0]==="Euros"?
                {...state,CaisseEsp:{...state.CaisseEsp,Euros:{...state.Euros,Montant:Number(state.CaisseEsp.Euros.Montant)+Number(action.payload[1]),
                EqDt:Number(state.CaisseEsp.Euros.EqDt)+Number(action.payload[2])}}}
                :
                state
            )
            case UpdateCurrencies: return{
                ...state,CurrenciesRate:{...state.CurrenciesRate,Euros:action.payload[0],
                Dollars:action.payload[1]
                }
            }
            case AddChq :return{
                ...state, CaisseChq: [...state.CaisseChq,{"id":uuidv4(),
                "Montant":action.payload[0],
                "Numéro":action.payload[1],
                "Tiré":action.payload[2],
                "Banque":action.payload[4],
                "Echéance":action.payload[3],}]
            }

            case EditChq :return{
                ...state, CaisseChq: state.CaisseChq.map((el)=>(el.id===action.payload[0])?{...el,
                    "Montant":action.payload[1],
                    "Numéro":action.payload[2],
                    "Tiré":action.payload[3],
                    "Banque":action.payload[4],
                    "Echéance":action.payload[5],
                }:el)   
            }
                        
            case RemoveChq :return{
                ...state, CaisseChq: state.CaisseChq.filter((el)=>el.id!==action.payload)
            }

            case AddDep :return{
                ...state, CaisseDep: [...state.CaisseDep,{"id":uuidv4(),
                "Montant":action.payload[0],
                "Categorie":action.payload[1],
                "Element":action.payload[2],
                "SELement":action.payload[3],
                "Obs":action.payload[4],}]
            }

            case EditDep :return{
                ...state, CaisseDep: state.CaisseDep.map((el)=>(el.id===action.payload[0])?{...el,
                    "Montant":action.payload[1],
                    "Obs":action.payload[2],
                }:el)   
            }

            case RemoveDep :return{
                ...state, CaisseDep: state.CaisseDep.filter((el)=>el.id!==action.payload)
            }

            case AddInvoice :return{
                ...state, Invoices: [...state.Invoices,{"id":uuidv4(),
                "Montant":action.payload[0],
                "Type":action.payload[1],
                "Numéro":action.payload[2],}]
            }
            
             default :return state;
        }
    
    };

export default CurrentDayReducer