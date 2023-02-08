import ProverbRow from "./ProverbRow";

function ProverbsList(props) {
  return (
    <ul className="list-group list-group-flush">
      {
        props.proverbs.length > 0 ?
          props.proverbs.map(proverb => (
            <li key={proverb.id} className="list-group-item">
              <ProverbRow id={proverb.id} content={proverb.content} country={proverb.country} />
            </li>
          )) : (
            <li className="list-group-item">
              <p className="fst-italic text-muted text-center mt-4">Nothing to show</p>
            </li>
          )
      }
    </ul>
  );
}

export default ProverbsList;