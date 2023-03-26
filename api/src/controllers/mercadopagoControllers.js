// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-4443944919928212-031713-be7be51b277bd7cb85c133b57215eef1-330694998",
});


          
// Crea un objeto de preferencia
let preference = {
    items: [],
    back_urls:{
        success: "http://localhost:3000/home",
        failure: "http://localhost:3000/home",
        pending: "http://localhost:3000/home",
    },
  };

let payMercadoPago = async (ids) => {
   console.log(ids);
  try {
    let price = 0;
    for (let i = 0; i < ids.length; i++) {
     let price1 = price + (parseInt(ids[i].price) * ids[i].cantidad)
     price= price1
    }
   let name = "";
    for (let i = 0; i < ids.length; i++) {
     name = name + ids[i].name + ", "
    }
    preference.items.push({
     title: name,
     unit_price: price,
     quantity: 1,
    })
     const response = await( mercadopago.preferences.create(preference));
     const preferenceId = response.body.id
     return ({preferenceId})
  } catch (error) {
    return ("Compra cancelada")
  }
}
  
module.exports = {payMercadoPago}