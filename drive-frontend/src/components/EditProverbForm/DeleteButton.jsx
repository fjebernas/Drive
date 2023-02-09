import { useNavigate } from "react-router-dom";
import proverbService from "../../services/ProverbService";
import { NotificationManager } from 'react-notifications';

function DeleteButton(props) {

  const navigate = useNavigate();

  const handleClick = () => {
    proverbService.destroy(props.id)
      .then(() => {
        navigate('/');
        NotificationManager.info('Deleted proverb!', 'Successful!', 2000);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <button
      type="button"
      className=" btn btn-danger w-100"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}

export default DeleteButton;