import React, {createContext, useState} from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Hotel from './Components/Hotel/Hotel';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ContactUs from './Components/ContactUs/ContactUs';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name:{loggedInUser.name}</p> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/destination/:place">
            <Booking />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <PrivateRoute exact path="/hotel">
            <Hotel />
          </PrivateRoute>

          <Route exact path="/contact">
            <ContactUs />
          </Route>

          <Route exact path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
      


      {/* <SignUp /> */}

      {/* <Login /> */}
{/* 
      <Hotel /> */}
    </UserContext.Provider>
  );
}

export default App;
