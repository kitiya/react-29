import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header-footer/header";
// import Footer from "./components/header-footer/footer";

// import Home from "./components/home";
import Project from "./components/projects";
import Stopwatch from "./components/projects/stopwatch";
import BasicCounter from "./components/projects/basic-counter";
import Artists from "./components/projects/artist";
import ArtistItem from "./components/projects/artist/artist-item";
import TodoApp from "./components/projects/todo-app";
import RecipeApp from "./components/projects/recipe-app";
import TicTacToe from "./components/projects/tic-tac-toe";
import KittenProfile from "./components/projects/kitten-profile";
import About from "./components/about";
import ExpenseTracker from "./components/projects/expense-tracker";
import StarWarsApi from "./components/projects/star-wars-api";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Project} />
      <Route exact path="/projects" component={Project} />
      <Route path="/projects/basic-counter" component={BasicCounter} />
      <Route path="/projects/stopwatch" component={Stopwatch} />
      <Route exact path="/projects/artists" component={Artists} />
      <Route path="/projects/artists/:id" component={ArtistItem} />
      <Route path="/projects/todo-app" component={TodoApp} />
      <Route path="/projects/recipe-app" component={RecipeApp} />
      <Route path="/projects/tic-tac-toe" component={TicTacToe} />
      <Route path="/projects/kitten-profile" component={KittenProfile} />
      <Route path="/projects/expense-tracker" component={ExpenseTracker} />
      <Route path="/projects/star-wars-api" component={StarWarsApi} />
      <Route path="/about" component={About} />
      <Route
        component={() => {
          return (
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              Page not found
            </h1>
          );
        }}
      />
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Routes;
