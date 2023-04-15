import proverbService from "../../services/ProverbService";
import { NotificationManager } from 'react-notifications';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FavoriteButton(props) {

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
    const defaultClasses = 'position-absolute top-50 end-0 translate-middle-y border-0';
    return props.proverb.favorite ? `${defaultClasses} btn btn-outline-warning` : `${defaultClasses} btn btn-outline-secondary`;
  }

  return (
    <button type="button" className={getButtonCssClasses()} onClick={handleClick}>
      <FontAwesomeIcon icon='star' size="xl" />
    </button>
  );
}

export default FavoriteButton;