

function validate(input) {

    

    let error = {};
    if (!input.name) error.name = "Insert a Name";
    if (!/^[A-Za-z]+$/.test(input.name)) error.name = "The Name is invalid";
    if (!input.image) error.image = "Insert an Image";
    if (!input.type) error.type = "Insert a Type";
    if (!input.price) error.price = "Insert a Price";
    if (!input.image) error.image = "Insert an Image";   
    if (!input.sex) error.sex = "Select a Sex"; 
    if (!input.size.length) error.size = "Select a Size";
    if (!input.amount) error.amount = "Insert an amount";
    if (!input.colors) error.colors= "Choose a Color";


    return error;
  }
  export default validate;