import SingleMoviePage from "pages/SingleMoviePage";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

  
export const App = () => {
  return (
    
      
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:id" element={<SingleMoviePage/>} >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route >
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
  
  );
};
