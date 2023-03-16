// import { useDispatch } from "react-redux";
import { useState } from "react";
import validate from "./Validate";

function Form() {
  // const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
    sex: "",
    size: [],
    amount:"",
    colors: [],
  });

  const [error, setError] = useState({
    name: "Insert Name",
    price: "Insert Price",
    type: "Choose Type",
    image: "Insert Image",
    sex: "Choose Sex",
    size: "Choose Size",
    colors: "Choose Colors",
  });

  const handleForm = (event) => {
    setError(validate({ ...form, [event.target.name]: event.target.value }));
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  // const submitHandler = async (event) => {    
  //    await axios
  //      .post("http://localhost:3001/clothes", form)
  //      .then((response) => alert("Created Stock!"))
  //      .catch((error) => alert(error));
  //  };

console.log(form)
  return (
    <div>
      <form> 
        <div>
          <label>LOAD STOCK</label>
        </div>
        <div>
          <h3>
            <label>NAME:</label>
          </h3>

          <input type={"text"} name="name" onChange={handleForm} />
          {error.name && <span>{error.name}</span>}
        </div>

        <h3>
          <label>PRICE:$</label>
        </h3>

        <input type={"text"} name="price" onChange={handleForm} />
        {error.price && <span>{error.price}</span>}

        <div>
          <h3>
            <label>TYPE:</label>
          </h3>
          <select name="type" onChange={handleForm}>
            <option value="">---</option>
            <option value="Remera">Remera</option>
            <option value="Vestido">Vestido</option>
            <option value="Chomba">Chomba</option>
            <option value="Pantalón">Pantalón</option>
            <option value="Short">Short</option>
          </select>
          {error.type && <span>{error.type}</span>}
        </div>
        <div>
          <h3>
            <label htmlFor="image">IMAGE:</label>
          </h3>
          <input type="file" id="image" name="image" onChange={handleForm} />
          {error.image && <span>{error.image}</span>}
        </div>

        <div>
          <h3>
            <label>SEX:</label>
          </h3>

          <select name="sex" onChange={handleForm}>
            <option value="">---</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Unisex">Unisex</option>
          </select>
          {error.sex && <span>{error.sex}</span>}
        </div>

        <div>
          <h3>
            <label>SIZE:</label>
          </h3>
          <select name="size"  onChange={handleForm}>
            <option value="">---</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          {error.size && <span>{error.size}</span>}
          <div>
            {/* {form.size.map(s => s+",")} */}
          </div>
        </div>
        {console.log(form.size)}
        <div>
          <h3>
            <label>AMOUNT:</label>
          </h3>
          <select name="amount"  onChange={handleForm}>
            <option value="">---</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          {error.amount && <span>{error.amount}</span>}
        </div>
        {console.log(form.amount)}
        <div>
          <p>COLORS:</p>
          <select name="colors" onChange={handleForm}>
            <option value="">---</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Grey">Grey</option>
          </select>
          {error.colors && <span>{error.colors}</span>}
          <div>
            {/* {form.colors.map(c => c+",")} */}
          </div>
        </div>
        {console.log(form.colors)}
        <button
           
            type="submit"
            disabled={
              error.name || error.type || error.image || error.size || error.amount || error.colors
                ? true
                : false
            }
          >
            Submit
          </button>
      </form>
    </div>
  );
}
export default Form;
