import { filterClothes } from "./productSlice";

const filterAllClothes = (state) => {
  return (dispatch, getState) => {

    const filterByGenre = getState().filteredProducts;

  

    const allProducts = getState().products.products;
    console.log(allProducts)
    console.log(allProducts?.map((clothe) => clothe.sex.includes(state.genre)))

    const clotheFilterByGenre =
      state.sex === ""
        ?  allProducts
        : 
        allProducts?.map((clothe) => clothe.sex.includes(state.genre));
        
        

    const clotheFilterByType = filterByType(
      state.clotheFilterByType,
      clotheFilterByGenre
    );
    const clotheFilterBySize = filterBySize(
      state.clotheFilterBySize,
      clotheFilterByType
    );
    const clotheFilterByColor = filterByColor(
      state.clotheFilterByColor,
      clotheFilterBySize
    );
    return dispatch(filterClothes(clotheFilterByColor))
  };
};

//cada vez que pase por un filtro sin importar la dirección, se va a copiar el estado anterior y no se van a pisar
const filterByType = (type,  products)=>{
    if(type === "") return  products;
    else{
        return  products.filter((c)=>c.type.find((t)=>t === type) )
    }
}
//filtro primero por el type, donde voy a recorrer la ropa que tenga, la voy a mapear y
//y buscar si hay types que coincidan en ella. Caso no se elija nada, devuelve toda la ropa
const filterBySize= (size,  products) =>{
    if(size === "") return  products;
    else{
        return  products.filter((c)=>c.size.find((s)=> s === size))
    }
}
//idem con los talles, si viene vacio, retorno toda la ropa existente y de ahi la filtro para buscar los sizes
//que coincidan

const filterByColor =(color,  products)=>{
    if(color === "") return  products;
    else{
        return  products.filter((c)=>c.color === color)
    }
}
//en el caso de los colores lo que voy a hacer es buscar la coincidencia y mostrarlo, caso contrario, mostrara toda la ropa

export   {filterAllClothes};
