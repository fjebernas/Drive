import ProverbRow from "./ProverbRow";

function ProverbsList(props) {

  const filteredProverbs = props.proverbs.reduce((result, proverb) => {
    proverb.content.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1 && result.push(proverb);
    return result;
  }, []);

  return (
    <ul className="list-group list-group-flush">
      <h5 className="fst-italic text-muted fw-light">Showing {props.proverbs.length} proverbs</h5>
      {
        filteredProverbs.length > 0 ?
        filteredProverbs
        .map(proverb => (
          <li key={proverb.id} className="list-group-item">
            <ProverbRow id={proverb.id} content={proverb.content} country={proverb.country} />
          </li>
        ))
        : (
          <li className="list-group-item">
            <p className="fst-italic text-muted text-center mt-4">Nothing to show</p>
          </li>
        )
      }
    </ul>
  );
}

export default ProverbsList;