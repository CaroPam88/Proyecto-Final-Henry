import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import{ filterAllClothes } from "../../Redux/actionFilter"

const Filter = () => {
  const dispatch = useDispatch();
  
  // const filterClothes = useSelector((state) => state.products.filteredProducts);
  
  const [filters, setFilters] = useState({
    genre: "",
    size: "",
    color: "",
    type: "",
  });

  useEffect(() => {
    dispatch(
      filterAllClothes(filters)
    );
  }, [filters, dispatch])

  console.log('state',filters);
  function handlerFilter(event) {
    setFilters({ ...filters,[event.target.name]: event.target.value });
    dispatch(
      filterAllClothes(filters)
    );
  }
  // { ...filters, [event.target.value]: event.target.value }

  return (
    <div>
      <select name="genre" onChange={handlerFilter}>
        <option value="">---</option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
      
      </select>

      <select name="type" onChange={handlerFilter}>
        <option value="">---</option>
        <option value="remera">Remera</option>
        <option value="vestido">Vestido</option>
        <option value="chomba">Chomba</option>
        <option value="pantalon">Pantalón</option>
        <option value="short">Short</option>
      </select>

      <select name="size" onChange={handlerFilter}>
        <option value="">---</option>
        <option value="S">S</option>
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="XL">XL</option>
        <option value="XXl">XXL</option>
      </select>

      <select name="color" onChange={handlerFilter}>
        <option value="">---</option>
        <option value="white">WHITE</option>
        <option value="black">BLACK</option>
        <option value="red">RED</option>
        <option value="blue">BLUE</option>
        <option value="green">GREEN</option>
      </select>
    </div>
  );
};

export default Filter;
