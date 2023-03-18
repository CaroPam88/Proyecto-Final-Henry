function validateErro(input) {
  let error = {};

  if (!input.name.trim()) error.name = " Insert a Name";
  else if (!/^[A-Za-z\s]+$/.test(input.name)) error.name = "The Name is invalid";
  if (!input.image) error.image = "Insert an Image";
  if (!input.type) error.type = "Insert a Type";
  if (!input.price) error.price = "Insert a Price";
  if (!input.image) error.image = "Insert an Image";
  if (input.sex.length === 0) error.sex = "Select a Sex";
  if (!input.size) error.size = "Select a Size";
  if (!input.amount) error.amount = "Insert an amount";
  if (input.colors.length === 0) error.colors = "Choose a Color";

  return error;
}

function validate(input) {
  let validated = {};

  if (input.name) validated.name = " ✔ validated";
  else if (!/^[A-Za-z\s]+$/.test(input.name)) validated.name = "✔ validated";
  if (input.image) validated.image = "✔ validated";
  if (input.type) validated.type = "✔ validated";
  if (input.price) validated.price = "✔ validated";
  if (input.image) validated.image = "✔ validated";
  if (input.sex.length > 0) validated.sex = "✔ validated";
  if (input.size) validated.size = "✔ validated";
  if (input.amount) validated.amount = "✔ validated";
  if (input.colors.length > 0) validated.colors = "✔ validated";

  return validated;
}
export  { validate, validateErro };
