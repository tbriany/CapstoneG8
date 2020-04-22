import React from "react";
import "./App.css";
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Landing from "./Components/Landing";
import Navbar from './Components/NavBar';
import Checkout from './Components/Checkout';
import ItemPopUp from './Components/ItemPopUp'
import CheckoutCart from './Components/CheckoutCart'
import ItemDetailsContextProvider from './Contexts/ItemDetailsContexts';
import CustomerContextProvider from './Contexts/CustomerContext';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <ItemDetailsContextProvider>
        <Navbar />
      </ItemDetailsContextProvider>
      <Switch>
        <ItemDetailsContextProvider>
          <Route exact path="/" component={Landing} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/popup" component={ItemPopUp} />
      <CustomerContextProvider>
          <Route exact path="/login" component={Login}/>
      </CustomerContextProvider>
          <Route exact path="/signup" component={Signup}/>
        </ItemDetailsContextProvider>
      </Switch>
      </div>
      );
    }
    
export default App;