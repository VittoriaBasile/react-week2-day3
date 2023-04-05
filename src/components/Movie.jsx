const Movie = (props) => {
  return (
    <>
      <div className="col-6 col-md-3 col-lg-2">
        <img className="img-fluid movie-cover" src={props.src} alt={props.alt} />
      </div>
    </>
  );
};

export default Movie;
