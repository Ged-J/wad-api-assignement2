import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from "./pages/PopularMoviesPage";
import ActorsContextProvider from "./contexts/actorsContext";
import ActorsPage from "./pages/actorsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteTvShowsPage from "./pages/favouriteTvShowsPage";
import TvShowPage from "./pages/tvShowDetailsPage";
import TvShowsPage from "./pages/tvShowsPage";
import TvShowReviewPage from "./pages/tvShowReviewPage";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddTvShowReviewPage from './pages/addTvShowReviewPage';
import ReactDOM from "react-dom";
// import { PublicPage, Movies, Profile} from "./pages";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import SignUpPage from "./signUpPage";
import MoviesProvider from "./moviesContext";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <SiteHeader /> 
        <ActorsContextProvider>
         <MoviesContextProvider>
         <TvShowsContextProvider>
         <MoviesProvider>
        <Routes>
          <Route path="/reviews/form" element={<PrivateRoute> <AddMovieReviewPage/> </PrivateRoute>} />
          <Route exact path="/movies/upcoming" element={<PrivateRoute> <UpcomingMoviesPage /> </PrivateRoute>} />
          <Route path="/reviews/:id" element={<PrivateRoute> <MovieReviewPage /> </PrivateRoute>} />
          <Route exact path="/movies/favourites" element={<PrivateRoute> <FavouriteMoviesPage /> </PrivateRoute>} />
          <Route exact path="/actors/favourites" element={<PrivateRoute> <FavouriteActorsPage /> </PrivateRoute>} />
          <Route exact path="/movies/popular" element={<PrivateRoute> <PopularMoviesPage /> </PrivateRoute>} />
          <Route path="/actors" element={<PrivateRoute> <ActorsPage /> </PrivateRoute>} />
          <Route path="/actors/:id" element={<PrivateRoute> <ActorPage /> </PrivateRoute>} />
          <Route path="/movies/:id" element={<PrivateRoute> <MovieDetailsPage /> </PrivateRoute>} />
          <Route exact path="/tvshows/favourites" element={<PrivateRoute> <FavouriteTvShowsPage /> </PrivateRoute>} />
          <Route path="/tvshows" element={<PrivateRoute> <TvShowsPage /> </PrivateRoute>} />
          <Route path="/tvShowReviews/:id" element={<PrivateRoute> <TvShowReviewPage /> </PrivateRoute> } />
          <Route path="/reviews/tvform" element={<PrivateRoute> <AddTvShowReviewPage/> </PrivateRoute> } />
          <Route path="/tvshows/:id" element={<PrivateRoute> <TvShowPage />  </PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><HomePage /> </PrivateRoute>} />
          <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/movies/upcoming"
              element={
                <PrivateRoute>
                  <UpcomingMoviesPage />
                </PrivateRoute>
              }
              />
        </Routes>
        </MoviesProvider>
        </TvShowsContextProvider>
         </MoviesContextProvider>
        </ActorsContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
 