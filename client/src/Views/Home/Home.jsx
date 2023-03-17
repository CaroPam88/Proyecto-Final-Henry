import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Filter from "../../Components/FilterBar/FilterBar";
import { getAllProducts } from "../../Redux/ActionsGet";

const Home = () => {
    
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(getAllProducts())
    }, [dispatch]);
    


  return (
    <>
      <h1>ESTE ES EL HOME</h1>
      <Filter />

     
      <CardContainer />
    </>
  );
};
export default Home;
