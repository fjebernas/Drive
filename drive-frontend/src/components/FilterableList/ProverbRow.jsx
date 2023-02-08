import { useNavigate } from "react-router-dom";

function ProverbRow(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/proverbs/edit/${props.id}`);
  }

  return (
    <figure className="text-center mt-2">
      <blockquote className="blockquote">
        <button onClick={handleClick} className="btn btn-link text-dark fs-4 py-3 text-decoration-none">
          {props.content}
        </button>
        <figcaption className="blockquote-footer">
          <cite title="source-title">{props.country}</cite>
        </figcaption>
      </blockquote>
    </figure>
  );
}

export default ProverbRow;