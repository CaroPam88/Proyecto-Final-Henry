import Card from "../Card/Card";
import { useSelector } from 'react-redux';
import style from './CardContainer.module.css';
import { useState } from "react";
import Paged from "../Paged/Paged";
import { setCurrentPaged } from "../../Redux/pagedActions";


const CardContainer = () => {
  const { currentPage } = useSelector(state => state.paged);
  const { filteredProducs } = useSelector(state => state.products);
  const homeProducts = filteredProducs.slice(0,3);

  const [view, setView] = useState({
    mode:'Slice'
  });
  const handlerView = () =>{
    view.mode === 'Slice'?setView({mode:'All'})
    :setView({mode:'Slice'})
  }

  const [ cardPage, setCardPage ] = useState(6);
  const indexOfLastProduct = currentPage * cardPage;
  const indexOfFirstProduct = indexOfLastProduct - cardPage;
  const currentCardPage = filteredProducs.slice(indexOfFirstProduct, indexOfLastProduct);
  const pagedHandler = (pagedNum) => {
    setCurrentPaged(pagedNum);
  };
  
  return (
    <section>
      <h3>Our products</h3>
      {view.mode === 'Slice' 
      ?<button onClick={() => handlerView()}>View all producs </button>
      :<button onClick={() => handlerView()}>View less producs </button>}
      <div className={style.content}>
        {view.mode === 'Slice'
          ?homeProducts?.map((c, i) => {
          return (
            <Card
              key={i}
              id={c.id}
              name={c.name}
              price={c.price}
              image={c.image}
              gender={c.gender}
              colors={[c.colors]}
              size={[c.size]}
            />
          );
        })
        : currentCardPage?.map((c, i) => {
          return (
            <Card
              key={i}
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
      { view.mode === 'All' && <Paged cardPage={cardPage} products={filteredProducs.length} currentPage={currentPage} pagedHandler={pagedHandler} />}
    </section>
    
  );
};
export default CardContainer;
