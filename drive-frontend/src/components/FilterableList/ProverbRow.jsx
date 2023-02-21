import { useNavigate } from "react-router-dom";

function ProverbRow(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/proverbs/edit/${props.proverb.id}`);
  }

  const getProverbCssClasses = (isFavorite) => {
    const defaultClasses = 'btn btn-link fs-4 py-3 text-decoration-none text-dark';
    return isFavorite ? `${defaultClasses} fw-bold` : defaultClasses;
  }

  return (
    <figure className="text-center mt-2">
      <blockquote className="blockquote">
        <button onClick={handleClick} className={getProverbCssClasses(props.proverb.favorite)}>
          {props.proverb.content}
        </button>
        <figcaption className="blockquote-footer">
          <cite title="source-title">{props.proverb.country}</cite>
        </figcaption>
      </blockquote>
      
    </figure>
  );
}

export default ProverbRow;