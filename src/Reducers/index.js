import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import CompanyReducer from './CompanyReducer';
import CurrentDayReducer from './CurrentDayReducer'
import BankReducer from './BanKReducer'
import DepOpReducer from './DepOpReducer'
import HistoryReducer from './HistoryReducer'


export default combineReducers({
    UsersReducer,
    CompanyReducer,
    CurrentDayReducer,
    BankReducer,
    DepOpReducer,
    HistoryReducer,
})