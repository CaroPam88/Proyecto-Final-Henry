import { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import{ filterAllClothes } from "../../Redux/actionFilter"

const Filter = () => {
  const dispatch = useDispatch();

  // const filterClothes = useSelector((state) => state.products.filteredProducts);

  const [filters, setFilters] = useState({
    genre: "",
    filterBySize: "",
    filterByColor: "",
    filterByType: "",
  });

  function handlerFilter(event) {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
    dispatch(
      filterAllClothes({ ...filters, [event.target.value]: event.target.value })
    );
  }

  return (
    <div>
      <select name="genre" onChange={handlerFilter}>
        <option value="">---</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
       
      </select>

      <select name="type" onChange={handlerFilter}>
        <option value="">---</option>
        <option value="Remera">Remera</option>
        <option value="Vestido">Vestido</option>
        <option value="Chomba">Chomba</option>
        <option value="Pantalón">Pantalón</option>
        <option value="Short">Short</option>
      </select>

      <select name="filterBySize" onChange={handlerFilter}>
        <option value="">---</option>
        <option value="S">S</option>
        <option value="l">L</option>
        <option value="m">M</option>
        <option value="xl">XL</option>
        <option value="xxl">XXL</option>
      </select>

      <select name="filterByColor" onChange={handlerFilter}>
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
