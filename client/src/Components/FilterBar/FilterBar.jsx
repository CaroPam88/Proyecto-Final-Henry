import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import{ filterAllClothes } from "../../Redux/actionFilter"
import { getAllColors } from "../../Redux/ActionsGet";

const Filter = () => {
  const dispatch = useDispatch();
  
  const colors = useSelector((state) => state.products.colors);
  
  const [filters, setFilters] = useState({
    genre: "",
    size: "",
    color: "",
    type: "",
  });

  useEffect(() => {
    dispatch(filterAllClothes(filters))
    dispatch(getAllColors())
  }, [filters, dispatch])

  function handlerFilter(event) {
    setFilters({ ...filters,[event.target.name]: event.target.value });
    dispatch(
      filterAllClothes(filters)
    );
  }
  // { ...filters, [event.target.value]: event.target.value }

  console.log(colors);
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
        <option value="">All colors</option>
        {colors.map((c, i) => (<option key={i} value={c} >{c}</option>))}

      </select>
    </div>
  );
};

export default Filter;
