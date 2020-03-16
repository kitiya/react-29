import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header-footer/header";
// import Footer from "./components/header-footer/footer";

// import Home from "./components/home";
import Project from "./components/project";
import Stopwatch from "./components/project/stopwatch";
import BasicCounter from "./components/project/basic-counter";
import Artists from "./components/project/artist";
import ArtistItem from "./components/project/artist/artist-item";
import TodoApp from "./components/project/todo-app";
import RecipeApp from "./components/project/recipe-app";
import TicTacToe from "./components/project/tic-tac-toe";
import KittenProfile from "./components/project/kitten-profile";
import About from "./components/about";
import ExpenseTracker from "./components/project/expense-tracker";
import StarWarsApi from "./components/project/star-wars-api";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Project} />
      <Route exact path="/project" component={Project} />
      <Route path="/project/basic-counter" component={BasicCounter} />
      <Route path="/project/stopwatch" component={Stopwatch} />
      <Route exact path="/project/artists" component={Artists} />
      <Route path="/project/artists/:id" component={ArtistItem} />
      <Route path="/project/todo-app" component={TodoApp} />
      <Route path="/project/recipe-app" component={RecipeApp} />
      <Route path="/project/tic-tac-toe" component={TicTacToe} />
      <Route path="/project/kitten-profile" component={KittenProfile} />
      <Route path="/project/expense-tracker" component={ExpenseTracker} />
      <Route path="/project/star-wars-api" component={StarWarsApi} />
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
