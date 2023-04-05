import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  const [movie, setMovie] = useState([]);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [noComments, setNoComments] = useState(false);

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

  const request2 = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MGI0MmY4MWI0MjAwMTM5YjI3YjciLCJpYXQiOjE2ODA3MTA0NzEsImV4cCI6MTY4MTkyMDA3MX0.Z_w0NmJWfq1nWKQ2s4FQy4BsaSZhHNf8mSLzidADoMw",
        },
      });
      if (response.ok) {
        const data = await response.json();

        if (data.length === 0) {
          setNoComments(true);
        }
        setComments(data);
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
    request2();
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
      <Row className="my-5">
        <Col className="d-flex justify-content-center">
          <img src={movie.Poster} alt="img" />
        </Col>
        <Col className="text-light d-flex flex-column align-items-start justify-content-center">
          <p>TITOLO: {movie.Title}</p>
          <p>GENERE: {movie.Genre}</p>
          <p>TRAMA: {movie.Plot}</p>
          <p>VOTO: {movie.imdbRating}</p>
          <p>COMMENTI:</p>
          {noComments && !error && <Alert variant="danger">Ancora nessun commento</Alert>}
          {comments.map((comment) => (
            <Row className="w-100" key={comment.id}>
              <Col xs={6}>{comment.author}:</Col>
              <Col xs={6}>{comment.comment}</Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
