import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.less';
import SignIn from './Components/Pages/SignUpSignIn/SignIn';
import SignUp from './Components/Pages/SignUpSignIn/SignUp'

const App: FC = () => (
  <Router>
   <Switch>
  <Route exact path='/'>
        <SignIn />
  </Route>
  <Route path='/signup'>
    <SignUp />
  </Route>
  </Switch>
  </Router>
  
);

export default App;