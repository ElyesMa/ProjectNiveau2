import { v4 as uuidv4 } from 'uuid';
import {ChangePassword,EditUser ,AddUser,ConUser} from '../actions/types'
let initState = 
[  {
    "id":uuidv4(),
    "username":"ELYES MANI",
    "Password":"12345",
    "Profil":"Administrator"
    },

    {
    "id":uuidv4(),
    "username":"IKRAM MANSOUR",
    "Password":"1234",
    "Profil":"Manager"
    },

    {
    "id":uuidv4(),
    "username":"OLFA ZENDAH",
    "Password":"1234",
    "Profil":"Cashier"
    },
    
   
];
const UsersReducer = (state={initState ,ConnectedUser:[""]}, action) => {
    switch (action.type) {
        case ChangePassword: return{
        ...state,initState:state.initState.map((el)=>(el.username===action.payload[0])?{...el,Password:action.payload[1]}:el)   
        }
        case EditUser: return{
            ...state,initState:state.initState.map((el)=>(el.username===action.payload[0])?{...el,
            Profil:action.payload[1],
            Password:action.payload[2]
            }:el)   
        }
        case AddUser:return{
            ...state, initState: [...state.initState,{"id":uuidv4(),"username":action.payload[0],"Password":action.payload[2],"Profil":action.payload[1]}]
            }
        case ConUser:return{
            ...state,ConnectedUser:action.payload
        }
         default :return state;
    }

};

export default UsersReducer

