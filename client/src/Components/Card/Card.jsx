import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <Link to={"/Detail"} />
      <p>Id:{props.id}</p>
      <p>Name:{props.name}</p>
      <img src={props.image} />
      <p>${props.price}</p>
    </div>
  );
};
export default Card;
