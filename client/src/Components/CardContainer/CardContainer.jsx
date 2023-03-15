import Card from "../Card/Card";
import { clothes } from "../../utils/simulateDB";

const CardContainer = () => {
  return (
    <div>
      {clothes.map((c) => {
        return (
          <Card
            id={c.id}
            name={c.name}
            price={c.price}
            image={c.image}
            gender={c.gender}
            colors={[c.colors]}
            size={[c.size]}
          />
        );
      })}
    </div>
  );
};
export default CardContainer;
