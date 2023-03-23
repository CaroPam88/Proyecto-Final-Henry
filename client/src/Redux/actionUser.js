import { getTheUser } from './userSlice';
import axios from 'axios';

const createUser = (user) => {
    return async (dispatch) => {
        try {
            const dbData = (await axios.get(`/user/${user.email}`)).data;

            if(dbData.length > 0) {
                const response = (await axios.post('/user/', user)).data;
                return dispatch(getTheUser(response));
            }else {
                return dispatch(getTheUser(dbData));
            }
        } catch (error) {
            alert({ error : error.message });
        }
    };
};
// const findUser = (user) => {
//     return async (dispatch) => {
//         try {
//             const dbData = (await axios.get(`/user/${user.email}`)).data;
//             console.log('find', dbData);
//             return dispatch(getTheUser(dbData));
//         } catch (error) {
//             console.log({ error : error.message });
//         }
//     }
// }

export { createUser }
