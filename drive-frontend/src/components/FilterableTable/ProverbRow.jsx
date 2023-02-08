function ProverbRow(props) {
  return (
    <figure className="text-center mt-3">
      <blockquote className="blockquote">
        <p>{props.content}</p>
        <figcaption className="blockquote-footer">
          <cite title="source-title">{props.country}</cite>
        </figcaption>
      </blockquote>
    </figure>
  );
}

export default ProverbRow;