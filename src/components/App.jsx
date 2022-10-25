import SingleMoviePage from "pages/SingleMoviePage";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Routes, Route} from "react-router-dom";
import Layout from "./Layout/Layout";

  
export const App = () => {
  return (
    
      
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:id" element={<SingleMoviePage/>} >
            <Route path="/movies/:id/cast" element={<div>Cast</div>} />
            <Route path="/movies/:id/reviews" element={<div>Reviews</div>} />
          </Route >
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
  
  );
};
