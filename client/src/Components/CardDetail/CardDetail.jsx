import React from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProductDetail, clearProductDetailState } from "../../Redux/ActionsGet"
import { useEffect } from "react";



const Detail = () => {
  console.log()
  const dispatch = useDispatch();
  //const id = props.match.params.id
  //const id = 1
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => { dispatch(clearProductDetailState()) }
  }, [dispatch, id]);

  const myProduct = useSelector(state => state.products.productDetail)
  console.log(myProduct)

  //function handleReset(){
  //dispatch(clearProductDetailState());
  //}

  return (
    <div>
      <div>
        <h1>{myProduct.name}</h1>
        <img alt={myProduct.name} src={myProduct.image} />
        <h2>{myProduct.price}</h2>
        <h4>{myProduct.type}</h4>
        <h4>{myProduct.sex}</h4>
        <h5>{myProduct.stockGeneral}</h5>
        <h3>Size:</h3>
        <ul>
          {myProduct.sizes?.map(size => (
            <li>
              {size && (
                <>
                  <h4>Size: {size.size}</h4>
                  <h4>Stock for Size: {size.stockSize}</h4>
                  <h4>Colors:</h4>
                  {size.colors && size.colors.map(color => (
                    <p>
                      Color: {color.color} - Stock for Color: {color.stockColors}
                    </p>
                  ))}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/home" >
        <button>Back</button>
      </Link>
    </div>
  )

};
export default Detail;
