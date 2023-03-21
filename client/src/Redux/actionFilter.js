import { filterClothes } from "./productSlice";

const filterAllClothes = (filters) => {
  return async (dispatch, getState) => {
    const {genre, size, color, type} = filters;
    
    const allProducts = getState().products.products;

    const productsFilteredGenre = await genreFilter(genre, allProducts);
    const productsFilteredType = await typeFilter(type, productsFilteredGenre);
    const productsFilteredSize = await sizeFilter(size, productsFilteredType);
    const productsFilteredColor = await colorFilter(color, productsFilteredSize);

    return dispatch(filterClothes(productsFilteredColor))
  };
};

const genreFilter = (genre, allProducts) => {
  const result = genre === ''
    ? allProducts
    : allProducts.filter(e => e.sex.some(gen => gen === genre));
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
  : productsFilteredType?.filter(cloth => cloth.sizes.some(s => s.size === size));
  return result;
};
const colorFilter = (color, productsFilteredSize) => {
  const result = color === ''
  ? productsFilteredSize
  : productsFilteredSize.filter(e => e.sizes.some(s => s.colors.some(c => c.color === color)));
  return result;
};

export {filterAllClothes};
