import ProverbRow from "./ProverbRow";

function ProverbsTable(props) {

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover text-center align-middle text-nowrap">
        <thead className="table-primary">
          <tr>
            <th width="1%">Id</th>
            <th>Proverb</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {
            props.proverbs.length > 0 ?
            props.proverbs.map(proverb => (
              <ProverbRow
                key={proverb.id}
                id={proverb.id}
                content={proverb.content}
                country={proverb.country}
              />
            )) : (
              <tr>
                <td
                  colSpan='3'
                  className='text-muted'
                >
                  No proverbs
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default ProverbsTable;