import Card from "../Card/Card.jsx";
import { useSelector } from "react-redux";
import style from "./CardContainer.module.css";
import { useState } from "react";
import Paged from "../Paged/Paged";
import Filter from "../FilterBar/FilterBar.jsx";
import { setCurrentPaged } from "../../Redux/pagedActions";

const CardContainer = () => {
  const { currentPage } = useSelector((state) => state.paged);
  const { filteredProducts } = useSelector((state) => state.products);
  const homeProducts = filteredProducts.slice(0, 3);

  const [view, setView] = useState({
    mode: "Slice",
  });
  const handlerView = () => {
    view.mode === "Slice"
      ? setView({ mode: "All" })
      : setView({ mode: "Slice" });
  };

  const [cardPage, _setCardPage] = useState(8);
  const indexOfLastProduct = currentPage * cardPage;
  const indexOfFirstProduct = indexOfLastProduct - cardPage;
  const currentCardPage = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pagedHandler = (pagedNum) => {
    setCurrentPaged(pagedNum);
  };

  return (
    <section className={style.section} id="cardContainer">

      <h3 className={style.sectionTitle}>Our Products</h3>

      <div className={style.div1}>
        <div className={style.card}>
          {view.mode === "Slice"
            ? homeProducts?.map((product, index) => { 
            if (product.stockGeneral !== 0){  return(
               
                <Card
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  gender={product.gender}
                  colors={[product.colors]}
                  size={[product.size]}
                />
              ) }})
            : currentCardPage?.map((product, index) => product.stockGeneral !== 0 && (
                <Card
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  gender={product.gender}
                  colors={[product.colors]}
                  size={[product.size]}
                />
              ))}
        </div>
      </div>
      {view.mode === "All" && (
        <Paged
          cardPage={cardPage}
          products={filteredProducts.length}
          currentPage={currentPage}
          pagedHandler={pagedHandler}
        />
      )}
      {view.mode === "All" && <Filter />}
      <button className={style.viewButton} onClick={() => handlerView()}>

        {view.mode === "Slice" ? "View all Products" : "View less Products"}

      </button>
    </section>
  );
};
export default CardContainer;
