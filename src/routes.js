import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header-footer/header";
import Footer from "./components/header-footer/footer";

import Home from "./components/home";
import Project from "./components/project";
import Stopwatch from "./components/project/stopwatch";
import BasicCounter from "./components/project/basic-counter";
import Todo from "./components/project/todo";
import Game from "./components/game";
import About from "./components/about";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project" component={Project} />
      <Route path="/project/basic-counter" component={BasicCounter} />
      <Route path="/project/stopwatch" component={Stopwatch} />
      <Route path="/project/todo" component={Todo} />
      <Route exact path="/game" component={Game} />
      <Route path="/about" component={About} />
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Routes;
