import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'

import UpcomingPage from './pages/upcomingPage';

import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import ProfilePage from './pages/profilePage';

import TrendingPage from './pages/trendingPage';
import TopRatedPage from './pages/topRatedPage';

import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AuthContext from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
        <AuthContext>
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
              <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/movies/upcoming" component={UpcomingPage} />
              <Route exact path="/movies/trending" component={TrendingPage} />
              <Route exact path="/movies/toprated" component={TopRatedPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
          </AuthContext>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

