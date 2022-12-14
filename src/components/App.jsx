import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import("../pages/Movies"));
const SingleMoviePage = lazy(() => import("../pages/SingleMoviePage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

  
const App = () => {
  return (      
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:id" element={<SingleMoviePage/>} >
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route >
      <Route path="*" element={<Navigate to={ "/" } />} />
      </Route>
    </Routes>
  );
};

export default App;
