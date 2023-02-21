import { useNavigate } from "react-router-dom";
import proverbService from "../../services/ProverbService";
import { NotificationManager } from 'react-notifications';

function FavoriteButton(props) {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    let updatedFields = {
      content: props.proverb.content,
      country: props.proverb.country,
    };

    if (props.proverb.favorite) {
      updatedFields = {
        ...updatedFields,
        favorite: 0
      };
    } else {
      updatedFields = {
        ...updatedFields,
        favorite: 1
      };
    }

    console.log(updatedFields);

    proverbService.update(props.proverb.id, updatedFields)
        .then(res => {
          props.handleFavoriteButtonClick();
          props.proverb.favorite ? NotificationManager.success('Untagged as favorite!', 'Successful!', 2000) :
            NotificationManager.success('Tagged as favorite!', 'Successful!', 2000);
        })
        .catch(err => {
          console.error(err);
          NotificationManager.error(`Can't tag proverb as favorite!`, 'Something went wrong.', 2000);
        });
  }

  const getButtonCssClasses = () => {
    return props.proverb.favorite ? 'btn btn-warning' : 'btn btn-outline-warning';
  }

  return (
    <button type="button" className={getButtonCssClasses()} onClick={handleClick}>Favorite</button>
  );
}

export default FavoriteButton;