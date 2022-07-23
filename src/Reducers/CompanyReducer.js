import { v4 as uuidv4 } from 'uuid';
import {EditCompany} from '../actions/types'

let initState = 
  {
    "id":uuidv4(),
    "Name":"STE MANI DEUTSCH PIECES",
    "Adresse":"Rue FARHTA HACHED , GP1 , Hammam SOUSSE",
    "PhoneNumber":"73.324.546",
    "Taxidentification" :"131147MAB000",
    "Url":"../images/LoginPage/Logo2.png"
    }


    const CompanyReducer = (state=initState, action) => {
        switch (action.type) {
            case EditCompany: return{
                ...state,
                Name:action.payload[0],
                Adresse:action.payload[1],
                PhoneNumber:action.payload[2],
                Taxidentification:action.payload[3],
                Url:action.payload[4],
            }
            
             default :return state;
        }
    
    };

export default CompanyReducer