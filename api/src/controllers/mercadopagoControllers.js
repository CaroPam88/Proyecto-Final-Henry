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
    auto_return: "approved",
  };

let payMercadoPago = async (ids) => {
  
    ids.forEach((el) => {
        preference.items.push( {
            title: ids.id,
            unit_price:el.price * el.cantidad,
            quantity: el.cantidad,
          },)
    })
    const response = await( mercadopago.preferences.create(preference));
    const preferenceId = response.body.id
    return ({preferenceId})
}
  
module.exports = {payMercadoPago}