import { useNavigate } from "react-router-dom";

function ProverbRow(props) {
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/proverbs/edit/${props.id}`)}>
      <td>{props.id}</td>
      <td>{props.content}</td>
      <td>{props.country}</td>
    </tr>
  );
}

export default ProverbRow;