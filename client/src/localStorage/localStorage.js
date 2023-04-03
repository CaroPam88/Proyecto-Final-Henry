
//obtenemos los productos que han
// sido guardados previamente en el localStorage con la clave "clothes".
 const getClothesFromStorage = () => {
    const clothes = localStorage.getItem("clothes");
    if (clothes) {
      return JSON.parse(clothes);
    }
    return [];
  };
  //si se agrega un producto al carrito se llama esta funcion y se pasa como argumento
  //el nuevo arreglo de productos del carrito. Con esta función se actualiza.
  const setClothesInStorage = (clothes) => {
    localStorage.setItem("clothes", JSON.stringify(clothes));
  };
  
  //obtiene todas la ropa que tiene guardada gracias al setClothesInStorage  y busca si hay 
  //dos productos con el mismo id para sumarlos y que aparezca la cantidad. 
  //cuando vuelvo a llamar a setClothesInStorage le actualizo lo que existe en el carrito.
    const addClothesToStorage = (clothe) => {
    const clothes = getClothesFromStorage();
    const existingClothe = clothes.find((c) => c.id === clothe.id);
    if (existingClothe) {
      existingClothe.quantity += clothe.quantity;
    } else {
      clothes.push(clothe);
    }
    setClothesInStorage(clothes);
  };
  //voy a eliminar un producto del carrito 
  //y primero se va a fijar en que tiene guardado el LocalStorage
  //Va a filtrar ese arreglo para sacar al producto eliminado y actualizarlo en el storage.
  const removeClothesFromStorage = (clotheId) => {
    const clothes = getClothesFromStorage();
    const actualClothes = clothes.filter((c) => c.id !== clotheId);
    setClothesInStorage(actualClothes);
  };

  export default {getClothesFromStorage, setClothesInStorage, addClothesToStorage, removeClothesFromStorage}

  //Estas constantes se van a exportar para ser usadas en el archivo del carrito de compras. 
  