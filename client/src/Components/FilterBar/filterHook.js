import { useEffect } from "react";
import { useState } from "react";
import { setCurrent } from "../../Redux/pagedSlice";
import { filterAllClothes } from "../../Redux/actionFilter";
import { getAllColors } from "../../Redux/ActionsGet";
import { useDispatch } from "react-redux";

export const useFilter = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        genre: "",
        size: "",
        color: "",
        type: "",
    });
    function handlerFilter(event) {
        setFilters(prevFilters => ({ ...prevFilters, [event.target.name]: event.target.value }));
        dispatch(
            filterAllClothes(filters)
        );
        dispatch(setCurrent(1));
    }
    useEffect(() => {
        dispatch(filterAllClothes(filters))
        dispatch(getAllColors())
    }, [filters, dispatch])
    return {filters, handlerFilter}
};