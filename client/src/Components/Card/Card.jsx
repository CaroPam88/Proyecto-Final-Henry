import { Link } from "react-router-dom";

const Card = ({id, name, image, price}) => {
  return (
    <div>
      <img src={image} />
      <p>${price}</p>
      <p>{name}</p>
      <Link to={`/Detail/${id}` }>
        <p>view more</p>
      </Link>
    </div>
  );
};
export default Card;
