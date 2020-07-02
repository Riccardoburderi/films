import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Serie from './Components/Serie';
import {BrowserRouter,Route} from 'react-router-dom';
import Contattaci from './Components/Contattaci';
import Chisiamo from './Components/Chisiamo'; 

ReactDOM.render(
    <BrowserRouter> 
      <Route exact path="/" component={App}></Route>    {/*mettiamo exact per far corrispondere esattamente quello in quel path*/}
      <Route path="/serie" component={Serie}></Route>
      <Route path="/contattaci" component={Contattaci}></Route>
      <Route path="/chisiamo" component={Chisiamo}></Route>

    </BrowserRouter>,
  document.getElementById('root')
);


