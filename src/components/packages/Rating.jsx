const Rating = ({ rate }) => {
  return (
    <div className="stars">
      {rate >= 1 ? (
        <i className="fas fa-star"></i>
      ) : rate < 1 ? (
        <i className="fas fa-star-half-alt"></i>
      ) : (
        <i className="far fa-star"></i>
      )}
      {rate >= 2 ? (
        <i className="fas fa-star"></i>
      ) : rate === 1.5 ? (
        <i className="fas fa-star-half-alt"></i>
      ) : (
        <i className="far fa-star"></i>
      )}
      {rate >= 3 ? (
        <i className="fas fa-star"></i>
      ) : rate === 2.5 ? (
        <i className="fas fa-star-half-alt"></i>
      ) : (
        <i className="far fa-star"></i>
      )}
      {rate >= 4 ? (
        <i className="fas fa-star"></i>
      ) : rate === 3.5 ? (
        <i className="fas fa-star-half-alt"></i>
      ) : (
        <i className="far fa-star"></i>
      )}
      {rate >= 5 ? (
        <i className="fas fa-star"></i>
      ) : rate === 4.5 ? (
        <i className="fas fa-star-half-alt"></i>
      ) : (
        <i className="far fa-star"></i>
      )}
    </div>
  );
};

export default Rating;
