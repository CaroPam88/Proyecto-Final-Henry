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
        value === 'prev'
            ? dispatch(setCurrentPaged(prev))
            : dispatch(setCurrentPaged(next));
    };
    return (
        <nav>
            <ul className={style.pagination}>

                {prev !== 0 && <button onClick={e => handlerPage(e)} value='prev' className={style.but}>{'<Prev'}</button>}
                {pagedNum?.map((num, i) => {

                    return num === currentPage
                        ? <li key={i} >
                            <a key={i} className={style.activeNum}>{num}</a>
                        </li>
                        : <li key={i}>
                            <a key={i} onClick={() => dispatch(setCurrentPaged(num))} className={style.noActiveNum} >{num}</a>
                        </li>
                })}
                {next !== pagedNum.length + 1 && <button onClick={e => handlerPage(e)} value='next' className={style.but}>{'Next>'}</button>}
            </ul>
        </nav>
    )
};

export default Paged;