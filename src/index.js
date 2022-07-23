import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import EditUsers from './Components/EditUsers';
import EditCompany from './Components/EditCompany';
import Register from './Components/Register';
import CaisseEsp from './Components/CaisseEsp'
import CaisseChq from './Components/CaisseChq'
import CaisseDep from './Components/CaisseDep'
import DetailsChq from './Components/DetailsChq'
import DetailsEsp  from './Components/DetailsEsp';
import DetailsDep  from './Components/DetailsDep';
import History from './Components/History'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Router>
  <Routes>

  <Route path="/" element={<App />}/>
  <Route path="/HomePage" element={<HomePage/>}>
  <Route path="EditUsers" element={<EditUsers/>}/>
  <Route path="EditCompany" element={<EditCompany/>}/>
  </Route>
  <Route path="/Register" element={<Register/>}>
  <Route path="CaisseEsp" element={<CaisseEsp/>}/>
  <Route path="CaisseChq" element={<CaisseChq/>}/>
  <Route path="CaisseDep" element={<CaisseDep/>}/> 
  <Route path="DetailsChq" element={<DetailsChq/>}/> 
  <Route path="DetailsEsp" element={<DetailsEsp/>}/> 
  <Route path="DetailsDep" element={<DetailsDep/>}/> 
  </Route>
  <Route path="/History" element={<History/>}/>
  </Routes>
  </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
