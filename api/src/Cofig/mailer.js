const nodemailer = require("nodemailer");

const MAILER_PASS = "ccidgguopvxynmii";
const MAIL= "pf.dressme@gmail.com"

// const {
//     MAILER_PASS,
//     MAIL
//   } = process.env



  async function sendEmail(user) {
    
      try {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          secure: true, // true for 465, esto dice la pagina de nodemailer
          port: 465,
          auth: {
            user: MAIL,
            pass: MAILER_PASS,
          },
        });
  
        
     
      let welcomeMail = {
         from: MAIL,
        to: user.email,
        subject: `¡Bienvenido/a a DressMe, ${user.name}!`,
        html: `
        <h2>Hola  ${user.name},</h2>
        <h3>¡Bienvenido/a a DressMe! Tu e-commerce de ropa.</h3>
        <p>Aquí encontrarás una amplia variedad de prendas de vestir para complementar tu estilo y personalidad.</p>
        <p>Desde la ropa más casual hasta los outfits más formales, tenemos todo lo que necesitas para lucir a la moda en cualquier ocasión.</p>
        <p>¡Explora nuestro catálogo y descubre la ropa que mejor se adapta a tu estilo!</p>
        <p>Saludos cordiales,</p>
        <p>El equipo de DressMe</p>
      `,
    };

    let info = await transporter.sendMail(welcomeMail);
    console.log('Correo electrónico enviado');
  } catch (error) {
    console.log(error);
  }
}


module.exports = sendEmail;

 

    // async function buySuccess(info) {
    //     const email = info.customer;
    
    //     const mail = {
    //       from: MAIL,
    //       to: user.email,
    //       subject: "Compra confirmada.",
    //       html: `<b>Muchas gracias por tu compra!!!! </b>`,
    //     };
    
    //     const message = await sendMail(mail);
    
    //     return message;
    //   }
//   }
// }  










