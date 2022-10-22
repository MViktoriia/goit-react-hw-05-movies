import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Routes, Route} from "react-router-dom";
import { Container, Header, Link } from "./App.styled";
  
export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:id" element={<div>MovieDetails</div>} >
          <Route path="/movies/:id/cast" element={<div>Cast</div>} />
          <Route path="/movies/:id/reviews" element={<div>Reviews</div>} />
        </Route >
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </Container>
  );
};
