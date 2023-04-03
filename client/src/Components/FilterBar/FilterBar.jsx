import { useSelector } from "react-redux";
import { useFilter } from "./filterHook";
import style from './filterBar.module.css';

const Filter = () => {
  const colors = useSelector((state) => state.products.colors);

  const { handlerFilter} = useFilter();

  // { ...filters, [event.target.value]: event.target.value }

  return (
    <div className={style.container}>
      {/* <select name="genre" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >All genders</option>
        <option value='Female' className={style.options} >Female</option>
        <option value='Male' className={style.options} >Male</option>
      </select> */}

      <select name="type" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >Products</option>
        <option value="remera" className={style.options} >T-shirt</option>
        <option value="vestido" className={style.options} >Dress</option>
        <option value="chomba" className={style.options} >Chomba</option>
        <option value="pantalon" className={style.options} >Pants</option>
        <option value="short" className={style.options} >Short</option>
      </select>

      <select name="size" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >Size</option>
        <option value="S" className={style.options} >S</option>
        <option value="L" className={style.options} >L</option>
        <option value="M" className={style.options} >M</option>
        <option value="XL" className={style.options} >XL</option>
        <option value="XXl" className={style.options} >XXL</option>
      </select>

      <select name="color" onChange={(e) => handlerFilter(e)} className={style.selections} >
        <option value="" className={style.options} >Colors</option>
        {colors.map((c, i) => (<option key={i} value={c}  className={style.options} >{c}</option>))}

      </select>
    </div>
  );
};

export default Filter;
