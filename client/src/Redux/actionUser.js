import { getTheUser, postCar, clearUser } from './userSlice';
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
const addProductUser = (elemento) => {
    return async (dispatch, getState) => {
        try {
            const { id } = getState().user.theUser;
            console.log('post', elemento);
            console.log('id',id);
            const response = (await axios.post(`/user/cart/${id}`, elemento)).data;
            return dispatch(postCar(response));
        } catch (error) {
            alert(`${ error }: { error.message }`);
        }
    }
};
const clearTheUser = () => {
    return (dispatch) => {
        return dispatch(clearUser({}));
    }
}


export { createUser, addProductUser, clearTheUser }
