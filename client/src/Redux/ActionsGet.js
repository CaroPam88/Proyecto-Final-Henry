import {
	getProducts,
	postProducts,
	getProdName,
	getDetail,
	getColors,
	getSize,
	clearProducts,
	clearDetail,
	clearColors,
	clearSize,
	putProduct,
	disableToProduct,
	modifyProduct,
} from './productSlice';
import axios from 'axios';

// GET FUNCTIONS
const getAllProducts = () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios(`/clothes/`)).data;
			const result = dbData.sort((a,b) => {
				if(a.id > b.id) return 1;
                if(b.id > a.id) return -1;
                return 0;
			})
			return dispatch(getProducts(result));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

const postClothes = ({
	name,
	size,
	price,
	type,
	image,
	sex,
	stockGeneral,
	stoockSize,
	colors,
}) => {
	return async (dispatch) => {
		try {
			const addColor = colors.map((col) => {
				return {
					color: col.color,
					stockColors: Number(col.stockColors),
				};
			});
			const product = {
				name: name,
				size: size,
				price: Number(price),
				type: type,
				image: image,
				sex: sex,
				stockGeneral: Number(stockGeneral),
				stoockSize: Number(stoockSize),
				colors: addColor,
			};
			const dbData = await axios.post(`/clothes/`, product);
			return dispatch(postProducts(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

const getProductsByName = (name) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios(`/clothes/?name=${name}`)).data;
			return dispatch(getProdName(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

const getProductDetail = (id) => {
	return async (dispatch) => {
		try {
			const dbData = (await axios(`/clothes/${id}`)).data;
			return dispatch(getDetail(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

const getAllColors = () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios(`/clothes/`)).data;
			const response = dbData.flatMap((e) =>
				e.sizes.flatMap((s) => s.colors.map((col) => col.color))
			); //Se puede agregar un .toLowerCase() para que filtre mejor.
			const result = [...new Set(response)];
			return dispatch(getColors(result));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

const getAllSize = () => {
	return async (dispatch) => {
		try {
			const dbData = (await axios(`/size/`)).data;
			return dispatch(getSize(dbData));
		} catch (error) {
			alert({error: error.message});
		}
	};
};

const putClothes = (data) => async (dispatch, getState) => {
	try {
		const idUser = getState().user.theUser?.id;
		const dbData = (await axios.put(`/clothes/`, [...data, {idUser}])).data;
		return dispatch(putProduct(dbData));
	} catch (error) {
		alert({error: error.message});
	}
};

const disableProduct = (id) => {
	return async (dispatch, getState) => {
		try{
			const filteredProducts = getState().product?.filteredProducts;
			const response = (await axios.put(`/clothes/exist/${id}`)).data;
			const updateProducts = filteredProducts[id-1].existing = !filteredProducts[id-1].existing;
			return dispatch(disableToProduct(updateProducts))
		}catch (error) {
			return {error : error.message}
		}
	}
};
const modifyTheProduct = (id, product) => {
    return async (dispatch) => {
        try {
            const dbData = await axios.put(`/clothes/admin/${id}`, product);
            return dispatch(modifyProduct(dbData));
        } catch (error) {
            alert({error: error.message});
        }
    };
};

// const putClothes = (data) => async (dispatch) =>{
//     try {
//         console.log('soy el put');
//         const dbData = (await axios.put(`/clothes/`, data)).data;
//         return dispatch(putProduct(dbData))
//     } catch (error) {
//         alert({error: error.message});
//     }
// }

//CLEAR STATE FUNCTIONS
const clearProductsState = () => (dispatch) => {
	const clearState = [];
	return dispatch(clearProducts(clearState));
};
const clearProductDetailState = () => (dispatch) => {
	const clearState = [];
	return dispatch(clearDetail(clearState));
};
const clearColorsState = () => (dispatch) => {
	const clearState = [];
	return dispatch(clearColors(clearState));
};
const clearSizeState = () => (dispatch) => {
	const clearState = [];
	return dispatch(clearSize(clearState));
};

export {
	getAllProducts,
	postClothes,
	getProductsByName,
	getProductDetail,
	getAllColors,
	getAllSize,
	clearProductsState,
	clearProductDetailState,
	clearColorsState,
	clearSizeState,
	putClothes,
	disableProduct,
	modifyTheProduct,
};
