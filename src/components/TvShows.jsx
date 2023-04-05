import MyHeader from "./MyHeader";
import Movie from "./Movie";
import { Spinner } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

const TVShows = (props) => {
  const [HarryPotter, setHarryPotter] = useState([]);
  const [AttackOnTitan, setAttackOnTitan] = useState([]);
  const [Avengers, setAvengers] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const request = async (endpoint, setStato) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setStato(data.Search);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    request("http://www.omdbapi.com/?apikey=e5af41fb&s=harry%20potter", setHarryPotter);
    request("https://www.omdbapi.com/?apikey=e5af41fb&s=attack%20on%20titan", setAttackOnTitan);
    request("https://www.omdbapi.com/?apikey=e5af41fb&s=avengers", setAvengers);
  }, []);

  return (
    <div className="container-fluid">
      {isLoading && !error && (
        <div className="container-fluid d-flex justify-content-center">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <MyHeader title={props.title} />;
      <div className="movie-gallery mx-md-5 mb-5 mt-4">
        <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
        <div id="harry-potter">
          <div className="movie-row">
            {error && !isLoading && (
              <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel compilare la tua key"}</Alert>
            )}
            <div className="movieList row g-1 flex-nowrap py-2">
              {HarryPotter.map((movie) => (
                <Movie imdbID={movie.imdbID} key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
        <h5 className="text-light mt-2 mb-2">Attack On Titan</h5>
        <div id="AttackOnTitan">
          <div className="movie-row">
            {error && !isLoading && (
              <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel compilare la tua key"}</Alert>
            )}
            <div className="movieList row g-1 flex-nowrap py-2">
              {AttackOnTitan.map((movie) => (
                <Movie imdbID={movie.imdbID} key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
        <h5 className="text-light mt-2 mb-2">Avengers</h5>
        <div id="Avengers">
          <div className="movie-row">
            {error && !isLoading && (
              <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel compilare la tua key"}</Alert>
            )}
            <div className="movieList row g-1 flex-nowrap py-2">
              {Avengers.map((movie) => (
                <Movie imdbID={movie.imdbID} key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVShows;
