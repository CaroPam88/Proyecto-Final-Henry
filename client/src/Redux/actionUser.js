// import {useAuth0} from '@auth0/auth0-react';
import { getTheUser } from './userSlice';
import axios from 'axios';

const findUser = (user) => {
    return async (dispatch) => {
        try {
            const response = (await axios.post('/user', user)).data;
            const dbData = (await axios(`/user/${user.email}`)).data;
            return dispatch(getTheUser(dbData));
        } catch (error) {
            alert({ error : error.message });
        }
    }
}

export { findUser }