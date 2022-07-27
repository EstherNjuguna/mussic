

import { Link } from "react-router-dom";

const ListItem = ({ image, genre, rating, album }) => {
  return (
    <Link to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={text} />
      <div className="listitem__info">
        <h4 className="info__name">{}</h4>
        <h4 className="info__rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default ListItem;