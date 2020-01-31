import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header-footer/header";
import Footer from "./components/header-footer/footer";

import Home from "./components/home";
import Project from "./components/project";
import About from "./components/about";
import Todo from "./components/project/todo";
import Stopwatch from "./components/project/stopwatch";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project" component={Project} />
      <Route path="/about" component={About} />
      <Route path="/project/todo" component={Todo} />
      <Route path="/project/stopwatch" component={Stopwatch} />
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Routes;
