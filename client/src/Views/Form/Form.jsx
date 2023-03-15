const Form = (name, price, type, image, genre, size, colors) => {
  return (
    <div>
      <form>
        <div>
          <button>Cargar Prendas</button>
        </div>
        <div>
          <h3>
            <label>Name:</label>
          </h3>

          <input type={"text"} name="price" />
        </div>

        <h3>
          <label>Price:$</label>
        </h3>

        <input type={"text"} name="price" />

        <div>
          <h3>
            <label>Type:</label>
          </h3>
          <select name="type">
            <option value="">---</option>
            <option value="Remera">Remera</option>
            <option value="Vestido">Vestido</option>
            <option value="Chomba">Chomba</option>
            <option value="Pantalón">Pantalón</option>
            <option value="Short">Short</option>
          </select>
        </div>
        <img></img>

        <div>
          <h3>
            <label>Genre:</label>
          </h3>

          <select name="genre">
            <option value="">---</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>

        <div>
          <h3>
            <label htmlFor="size">Size: </label>
          </h3>
          <select name="size">
            <option value="">---</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>

        <div>
          <h3>
            <p>Colors:</p>
            <select name="colors">
              <option value="">---</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Grey">Grey</option>
            </select>
          </h3>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
