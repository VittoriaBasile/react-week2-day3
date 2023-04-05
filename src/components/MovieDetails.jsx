import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const request = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setMovie(data);
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
    request(`http://www.omdbapi.com/?apikey=e5af41fb&i=${params.movieId}`);
  }, []);

  return (
    <Container>
      {isLoading && !error && (
        <div className="container-fluid d-flex justify-content-center">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && !isLoading && <Alert variant="danger">{errorMsg ? errorMsg : "Errore nel compilare la tua key"}</Alert>}
      <img src={movie.Poster} alt="img" />
      <Row>
        <Col>
          <p>{movie.Title}</p>
          <p>{movie.Genre}</p>
          <p>{movie.Plot}</p>
          <p>{movie.imdbRating}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
