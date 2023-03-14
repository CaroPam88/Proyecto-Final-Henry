const Detail = ()=>{
    const Clothes = {id, name, price, type, image, gender, size, colors}

    return(
        <div>
            
        <img src={image}  />
        <h4>{id}</h4>
        <h4>{name}</h4>
        <h4>{price}</h4>
        <h4>{type}</h4>
        <img src={image}  />
        <h4>{genre}</h4>
        <h4>{size}</h4>
        <h4>{colors}</h4>


      </div>
    )
}
export default Detail;