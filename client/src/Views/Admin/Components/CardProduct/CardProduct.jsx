import style from './CardProduct.module.css'

const CartProduct = ({id, name, image, stockGeneral, price}) => {
    return (
        <section key={id} className={style.content} >
            <div className={style.imgContent} >
                <img src={image} alt={name}  className={style.img} />
            </div>
            <div className={style.dataContent} >
                <h2 className={style.name} >{name}</h2>
                <div className={style.info}>
                    <p className={style.price} >precio: ${price}</p>
                    <p className={style.stock} >stock general: {stockGeneral}</p>
                </div>
            </div>
        </section>
    )
}
export default CartProduct;