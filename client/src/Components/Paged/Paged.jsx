import { useDispatch } from "react-redux";
import { setCurrentPaged } from "../../Redux/pagedActions";
import style from "./paged.module.css";

const Paged = ({ cardPage, products, currentPage }) => {
    const dispatch = useDispatch();
    let pagedNum = [];
    for (let i = 1; i <= Math.ceil(products / cardPage); i++) {
        pagedNum.push(i)
    }
    let prev = currentPage - 1;
    let next = currentPage + 1;



    const handlerPage = (e) => {
        const value = e.target.value;
        value === '<'
            ? dispatch(setCurrentPaged(prev))
            : dispatch(setCurrentPaged(next));
    };
    return (
        <nav>
            <ul className={style.pagination}>

                {prev !== 0 && <a onClick={e => handlerPage(e)} value='<'>{'<Prev'}</a>}
                {pagedNum?.map((num, i) => {

                    return num === currentPage
                        ? <a key={i} >
                            <a key={i} >{num}</a>
                        </a>
                        : <a key={i}>
                            <a key={i} onClick={() => dispatch(setCurrentPaged(num))} >{num}</a>
                        </a>
                })}
                {next !== pagedNum.length + 1 && <a onClick={e => handlerPage(e)} value='>'>{'Next>'}</a>}
            </ul>
        </nav>



    )
};

export default Paged;