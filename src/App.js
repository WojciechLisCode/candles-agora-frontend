import "./App.css";

import Navbar from "./components/Navbar";
import Candles from "./pages/Candles";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import CandleDetails from "./pages/CandleDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewCandleLoader from "./pages/NewCandleLoader";

import { getUserWithStoredToken } from "./store/actions/meUser";

import { Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Candles} />
        <Route path="/users" component={Users} />
        <Route path="/user/:id" component={UserDetails} />
        <Route path="/candle/:id" component={CandleDetails} />
        <Route path="/ncl" component={NewCandleLoader} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
