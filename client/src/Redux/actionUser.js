import { getTheUser, postCar } from './userSlice';
import axios from 'axios';

const createUser = (user) => {
    return async (dispatch) => {
        try {
                const response = (await axios.post('/user/', user)).data;
                return dispatch(getTheUser(response));
        } catch (error) {
            alert({ error : error.message });
        }
    };
};
const addProductUser = (carrito, id) => {
    return async (dispatch) => {
        try {
            const response = (await axios.post(`/user/cart/${id}`, carrito)).data;
            return dispatch(postCar(response));
        } catch (error) {
            alert(`${ error }: { error.message }`);
        }
    }
};


export { createUser, addProductUser }
