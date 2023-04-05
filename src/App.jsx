import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TVShows from "./components/TvShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="/tv-shows" element={<TVShows title="TvShows" />} />
          <Route path="/My-profile" element={<Profile />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
