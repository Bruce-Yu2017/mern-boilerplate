import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Show} exact = {true} />
        
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter; 
