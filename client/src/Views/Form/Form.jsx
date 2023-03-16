 import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import validate from "./Validate";
import postClothes from "../../Redux/ActionsGet"
// import axios from "axios"

const ropa = [
  {
    "id": 1,
    "name": "product_3",
    "price": "500",
    "type": "vestido",
    "image": "tex",
    "sex": [
      "dama"
    ],
    "stockGeneral": 50,
    "existing": true,
    "sizes": [
      {
        "size": "M",
        "stockSize": 50,
        "colors": [
          {
            "color": "negro",
            "stockColors": 10
          },
          {
            "color": "blanco",
            "stockColors": 20
          },
          {
            "color": "azul",
            "stockColors": 20
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Romina",
    "price": "3500",
    "type": "vestido",
    "image": "text",
    "sex": [
      "Woman"
    ],
    "stockGeneral": 64,
    "existing": true,
    "sizes": [
      {
        "size": "L",
        "stockSize": 64,
        "colors": [
          {
            "color": "negro",
            "stockColors": 15
          },
          {
            "color": "blanco",
            "stockColors": 25
          },
          {
            "color": "azul",
            "stockColors": 24
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Pato",
    "price": "6500",
    "type": "remera",
    "image": "text",
    "sex": [
      "Man"
    ],
    "stockGeneral": 61,
    "existing": true,
    "sizes": [
      {
        "size": "M",
        "stockSize": 61,
        "colors": [
          {
            "color": "negro",
            "stockColors": 45
          },
          {
            "color": "blanco",
            "stockColors": 2
          },
          {
            "color": "azul",
            "stockColors": 14
          }
        ]
      }
    ]
  }
]

let  result = [
  {
      "color": "negro",
      "stockColors": 10
  },
  {
      "color": "blanco",
      "stockColors": 20
  },
  {
      "color": "azul",
      "stockColors": 20
  }
]

function Form() {
   const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
    sex: [],
    size: "",
    amount:"",
    stockGeneral:0,
    stockSize:0,
    colors: [],
    existing:true,
  });
  const handlerColor = (event) =>{
    setForm({...form, colors: [form.colors, event.target.value]})
  }
  
  const [error, setError] = useState({
    name: "Insert Name",
    price: "Insert Price",
    type: "Choose Type",
    image: "Insert Image",
    genre: "Choose Sex",
    stockSize: "",
    colors: "Choose Colors",
  });
  

  const handleForm = (event) => {
    setError(validate({ ...form, [event.target.name]: event.target.value }));
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  function SubmitHandler(e){
    e.preventDefault();
    if (Object.values(error).length > 0) alert("Por favor rellenar todos los campos")
    else {
        dispatch(postClothes(form))
        alert('¡Post creado!')
    }
};



// const myProduct = useSelector(state => state.products.productDetail)
let product = []
let cuenta =  ropa.map(el => el.sizes).map(elem => elem[0].colors.map(elem=> product.push(elem) ))
product.push(cuenta);



  return (
    <div onSubmit={e => SubmitHandler(e)}>
      
      <form > 
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
            <label>GENRE:</label>
          </h3>

          <select name="genre" onChange={handleForm}>
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
           <option value="s">S</option>
           <option value="m">M</option>
           <option value="l">L</option>
           <option value="xl">XL</option>
           <option value="xxl">XXL</option>
          </select>
          {error.size && <span>{error.size}</span>}
          <div>
            {/* {form.size.map(s => s+",")} */}
          </div>
        </div>
       
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
       
        <div>
          <p>COLORS:</p>
          <select name="size"  onChange={(e) => handlerColor(e)} >
            {product.map((r) =>(
              <option>{r.color}</option>
            ) )}
          </select>
          {error.colors && <span>{error.colors}</span>}
          <ul>
            <li>
            {form.colors.map(c => c+",")}
            </li>
          </ul>
        </div>
        {console.log(form)}
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
