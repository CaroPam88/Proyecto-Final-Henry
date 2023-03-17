import { filterClothes } from "./productSlice";

const filterAllClothes = (filters) => {
  return async (dispatch, getState) => {
    const {genre, size, color, type} = filters;
    
    const allProducts = getState().products.products;
    console.log('obtiene',allProducts)
    // console.log('filtra',allProducts?.map(e => e.sex.filter((clothe) => clothe === genre)))

    const productsFilteredGenre = await genreFilter(genre, allProducts);
    const productsFilteredType = await typeFilter(type, productsFilteredGenre);
    const productsFilteredSize = await sizeFilter(size, productsFilteredType);
    // const productsFilteredColor = await colorFilter(color, productsFilteredSize);

    return dispatch(filterClothes(productsFilteredSize))
  };
};

const genreFilter = (genre, allProducts) => {
  const result = genre === ''
    ? allProducts
    : allProducts.filter(e => e.sex.includes(genre));
  return result;
};
const typeFilter = (type, productsFilteredGenre) => {
  const result = type === ''
  ? productsFilteredGenre
  : productsFilteredGenre.filter(cloth => cloth.type === type)
  return result;
};
const sizeFilter = (size, productsFilteredType) => {
  const result = size === ''
  ? productsFilteredType
  : productsFilteredType?.filter(cloth => cloth.size === size)
  console.log(result);
  return result;
};

export   {filterAllClothes};
