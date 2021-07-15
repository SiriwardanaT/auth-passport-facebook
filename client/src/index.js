import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './component/loginComponent'
import My from './component/my'
import {Route,BrowserRouter,Switch} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
       <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/my" component={My} />
       </Switch>
         

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
