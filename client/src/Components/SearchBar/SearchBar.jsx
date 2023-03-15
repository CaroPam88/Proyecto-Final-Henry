import { getProductsByName } from "../../Redux/ActionsGet";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState({
        name:'',
    });

    const handlerSearch = (e) => {
        e.preventDefault()
        let eName = e.target.name;
        let eValue = e.target.value
        eName === 'submit'
        ? dispatch(getProductsByName(name))
        : setName(eValue);
    };

    const location = useLocation();
    const path = location.pathname;
    if(path.startsWith('/Detail/') || path.startsWith('/form'))return (<div></div>);

    return (
        <div>
            <input
                type='search'
                placeholder='Search clothes by name...'
                onChange={e => handlerSearch(e)}
                name='input'
            />
            <button type='submit' value={name} onClick={e => handlerSearch(e)} name='submit' >Search</button>
        </div>
    );
};

export default SearchBar;