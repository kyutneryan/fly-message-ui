import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.less";
import Home from "./Components/Pages/Profile/Home";
import Profile from "./Components/Pages/Profile/ProfilePage";
import SignIn from "./Components/Pages/SignUpSignIn/SignIn";
import SignUp from "./Components/Pages/SignUpSignIn/SignUp";

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <SignIn />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Redirect from='/signin' to='/' />
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;