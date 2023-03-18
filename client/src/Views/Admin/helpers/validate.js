const checkUndefined = (input) => {
    if (!input?.length) return true;
    for (let el in input) {
      if (input[el] === undefined) {
        return true;
      }
      return false;
    }
  };
  
  const checkZero = (arr) => {
    return arr.find((el) => Number(el) === 0); // comprueba si es 0
  };
  
  
  const checkNaN = (arr) => {
    return arr.filter((el) => isNaN(Number(el))).length; // comprueba si es NaN
  };
  
  
  const checkNegatives = (arr) => {
    return arr.filter((el) => Number(el) < 0).length; // comprueba si es negatives
  };
  
  const validate = (input) => {
   const errors = {};
    const {
        id,
        image,
        name,
        gender,
        colors,
        size,
        price
    } = input;
    console.log(input);
 //check undefined
 if (checkUndefined(size)) {
    errors.temp = "sizes pls :(";
  }
 if (checkUndefined(colors)) {
    errors.temp = "color pls :(";
  }
  //check name

  if (name.length > 50) {
    errors.name = "Name must be max 50 characters";
  } else if (name?.length < 4) {
    errors.name = "Name must be at least 4 characters";
  }

  if (id.length > 50) {
    errors.name = "id must be max 50 characters";
  } else if (id?.length < 1) {
    errors.name = "id must be at least 1 character";
  }

  if (image.length < 50) {
    errors.name = "select file pls";
  }

  if(price.length < 1){
    errors.name = "price must be more than 1"
  }

  if(gender.input !== "female" || "male"){
    errors.name = "must be a valid gender"
  }


  return errors;


  };
  
  export default validate;