import { setCurrent, setOrderer } from "./pagedSlice";

//Set current Paged\\
const setCurrentPaged = (num) => {
    return (dispatch) => {
        try {
            return dispatch(setCurrent(num))
        } catch (error) {
            alert({ error : error.message });
        }
    }
};
const setOrder = (str) => {
    return (dispatch) => {
        try {
            return dispatch(setOrderer(str))
        } catch (error) {
            alert({ error : error.message });
        }
    }
};

export {setCurrentPaged, setOrder};