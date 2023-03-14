import  { getProducts, getDetail, getColors, getSize, clearProducts, clearDetail, clearColors, clearSize } from './productSlice';
import axios from 'axios';


// GET FUNCTIONS
const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const dbData = (await axios(`/clothes/getProductByIdHandler`)).data;
            return dispatch(getProducts(dbData));
        } catch (error) {
            alert({ error : error.message });
        };
    };
};

const getProductDetail = (id) => {
    return async (dispatch) => {
        try {
            const dbData = (await axios(`/clothes/getProductByIdHandler/${id}`)).data;
            return dispatch(getDetail(dbData));
        } catch (error) {
            alert({ error : error.message });
        };
    };
};

const getAllColors = () => {
    return async (dispatch) => {
        try {
            const dbData = (await axios(`/colors/getColors`)).data;
            return dispatch(getColors(dbData));
        } catch (error) {
            alert({ error : error.message });
        };
    };
};

const getAllSize = () => {
    return async (dispatch) => {
        try {
            const dbData = (await axios(`/size/getSize`)).data;
            return dispatch(getSize(dbData));
        } catch (error) {
            alert({ error : error.message });
        };
    };
};

//CLEAR STATE FUNCTIONS
const clearProductsState = () => (dispatch) => {
    const clearState = [];
    return dispatch(clearProducts(clearState))
}
const clearProductDetailState = () => (dispatch) => {
    const clearState = [];
    return dispatch(clearDetail(clearState))
}
const clearColorsState = () => (dispatch) => {
    const clearState = [];
    return dispatch(clearColors(clearState))
}
const clearSizeState = () => (dispatch) => {
    const clearState = [];
    return dispatch(clearSize(clearState))
}

export { getAllProducts, getProductDetail, getAllColors, getAllSize, clearProductsState, clearProductDetailState, clearColorsState, clearSizeState }