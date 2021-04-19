import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import User from './Components/User/Booking/Booking';
import Booking from './Components/User/Booking/Booking';
import Orders from './Components/User/Orders/Orders';
import Review from './Components/User/Review/Review'
import AllOrders from './Components/Admin/AllOrders/AllOrders';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './Components/Admin/ManageService/ManageService';
export const userContext = createContext();

function App() {
  const [loggedInUSer, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUSer, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageService></ManageService>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
