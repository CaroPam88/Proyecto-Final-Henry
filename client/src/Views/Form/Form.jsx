import { useDispatch } from "react-redux";
import { useState } from "react";
import validate from "./Validate";
import { postClothes } from "../../Redux/ActionsGet"

function Form() {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: "",
    size: "",
    price: "",
    type: "",
    image: "",
    sex: [],
    stockGeneral:0,
    stockSize:0,
    colors: [],
    existing:true,
  });
  
  const [error, setError] = useState({
    name: "Insert Name",
    price: "Insert Price",
    type: "Choose Type",
    image: "Insert Image",
    sex: "Choose Genre",
    stockSize: "Insert a stock size",
    colors: "Choose Colors",
  });
  
  const [addColor, setAddColor] = useState({
    color:'',
    stockColors: 1,
  })

  const handleForm = (event) => {
    setError(validate({ ...form, [event.target.name]: event.target.value }));
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const genreHandler = (e) => {
    let value = e.target.value;
    let event = e.target.name;
    if(value === '') alert('Please select a genre');
    else if(form.sex?.includes(value))  alert('The genre has already been chosen')
    else{
      setError(validate({ ...form, [event]: value }))
      setForm(prevState => ({
      ...prevState,
      sex: [...prevState.sex, value]
    }))};
  };
  const genreDeleteHandler = (e) => {
    const value = e.target.value;
    const filteredGenre = form.sex?.filter(genre => genre !== value.toString());
    setError(validate({ ...form, sex: filteredGenre }));
    setForm({ ...form, sex: filteredGenre });
  };

  const handlerColor = (e) =>{
    const value = e.target.value;
    const target = e.target.name;
    setAddColor({...addColor, [target] : value });
  };
  const handlerAddColor = (e) => {
    e.preventDefault();
    setForm(prevState => ({
      ...prevState,
      colors:[...form.colors, addColor],
    }));
  };
  const colorDeleteHandler = (e) => {
    const key = e.target.key;
    const index = form.colors?.findIndex(color => color.key === key);
    if (index !== -1) {
      const filteredColors = [...form.colors];
      filteredColors.splice(index, 1);
      setError(validate({ ...form, colors: filteredColors }));
      setForm({ ...form, colors: filteredColors });
    }
  };

  function SubmitHandler(e){
    e.preventDefault();
    dispatch(postClothes(form));
    alert('The cloth has been submitted')
};

console.log(form);
  return (
      <form onSubmit={e => SubmitHandler(e)}> 

          <input type='text' name='name' onChange={e => handleForm(e)} placeholder='Incert name' />
          {error.name && <span>{error.name}</span>}

          <section>
          <select name="size"  onChange={e => handleForm(e)}>
            <option value="">Insert size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          {error.size && <span>{error.size}</span>}
        </section>

        <input type='number' name="price" min={1} onChange={e => handleForm(e)} placeholder='Insert price' />
        {error.price && <span>{error.price}</span>}

        <div>
          <select name="type" onChange={e => handleForm(e)}>
            <option value="">Insert type</option>
            <option value="remera">Remera</option>
            <option value="vestido">Vestido</option>
            <option value="chomba">Chomba</option>
            <option value="pantalon">Pantalón</option>
            <option value="short">Short</option>
          </select>
          {error.type && <span>{error.type}</span>}
        </div>
        
        <div>
          <input type="file" id="image" name="image" onChange={e => handleForm(e)} />
          {/* {error.image && <span>{error.image}</span>} */}
        </div>

        <div>
          <select name="genre" onChange={e => genreHandler(e)}>
            <option value="">Inser genre</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          {error.sex && <span>{error.sex}</span>}
          {form.sex?.map((genre, i) => (<button type="button" key={i} value={`${genre}`} onClick={e => genreDeleteHandler(e)} >{genre}</button>))}
        </div>

        <div>
          <input type='number' min={1} placeholder="Insert general Stock" name="stockGeneral"  onChange={e => handleForm(e)}/>
          {error.stockSize && <span>{error.stockSize}</span>}
        </div>
      
        <div>
          <input type='text' name="color" placeholder="Incert color name" onChange={e => handlerColor(e)} />
          <input type='number' name="stockColors" min={1} placeholder="Incert color size" onChange={e => handlerColor(e)} />
          <button onClick={e => handlerAddColor(e)} >Add color date</button>
          {form.colors?.map((el,i) => <button type="button" key={i} value={i} onClick={e => colorDeleteHandler(e)} >{`${el.color} | ${el.stockColors}`}</button>)}
        </div>
        {!error.name  && !error.price  && !error.type  && !error.image  && !error.sex  && !error.stockSize  && !error.colors && <button type="submit" >Submit</button>}
      </form>
  );
}
export default Form;
