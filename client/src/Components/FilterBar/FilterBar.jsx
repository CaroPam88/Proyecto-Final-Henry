import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import{ filterAllClothes } from "../../Redux/actionFilter"
import { getAllColors } from "../../Redux/ActionsGet";
import { setCurrent } from "../../Redux/pagedSlice";
import style from './filterBar.module.css';

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
    dispatch(setCurrent(1))
  }
  // { ...filters, [event.target.value]: event.target.value }

  return (
    <div className={style.container}>
      <select name="genre" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >All genders</option>
        <option value='Female' className={style.options} >Female</option>
        <option value='Male' className={style.options} >Male</option>
      
      </select>

      <select name="type" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >All types</option>
        <option value="remera" className={style.options} >Remera</option>
        <option value="vestido" className={style.options} >Vestido</option>
        <option value="chomba" className={style.options} >Chomba</option>
        <option value="pantalon" className={style.options} >Pantalón</option>
        <option value="short" className={style.options} >Short</option>
      </select>

      <select name="size" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >All sizes</option>
        <option value="S" className={style.options} >S</option>
        <option value="L" className={style.options} >L</option>
        <option value="M" className={style.options} >M</option>
        <option value="XL" className={style.options} >XL</option>
        <option value="XXl" className={style.options} >XXL</option>
      </select>

      <select name="color" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >All colors</option>
        {colors.map((c, i) => (<option key={i} value={c}  className={style.options} >{c}</option>))}

      </select>
    </div>
  );
};

export default Filter;
