const nodemailer = require("nodemailer");


const MAILER_PASS = "ccidgguopvxynmii";
const MAIL= "pf.dressme@gmail.com"


async function sendEmail(user) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
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
        <html>
          <head>
            <title>Bienvenido/a a DressMe</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border-top: 5px solid violet;
                text-align: center;
              }
              h2 {
                font-size: 24px;
                margin-bottom: 10px;
              }
              h3 {
                font-size: 20px;
                margin-bottom: 10px;
              }
              p {
                font-size: 16px;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Hola ${user.name},</h2>
              <br>
              <h3>¡Bienvenido/a a DressMe! Tu e-commerce de ropa.</h3>
              <p>Aquí encontrarás una amplia variedad de prendas de vestir para complementar tu estilo y personalidad.</p>
              <p>Desde la ropa más casual hasta los outfits más formales, tenemos todo lo que necesitas para lucir a la moda en cualquier ocasión.</p>
              <p>¡Explora nuestro catálogo y descubre la ropa que mejor se adapta a tu estilo!</p>
              <p>Saludos cordiales,</p>
              <p>El equipo de DressMe</p>
            </div>
          </body>
        </html>
      `,
    };

    let info = await transporter.sendMail(welcomeMail);
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.log(error);
  }
}

async function buyEmail(user) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
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
        <html>
          <head>
            <title>Muchas gracias por tu compra!</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border-top: 5px solid violet;
                text-align: center;
              }
              h2 {
                font-size: 24px;
                margin-bottom: 10px;
              }
              h3 {
                font-size: 20px;
                margin-bottom: 10px;
              }
              p {
                font-size: 16px;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Hola ${user.name},</h2>
              <br>
              <h3>DressMe te agradece.</h3>              
              <p>¡Muchas gracias por tu compra!!!!!</p>
              <p>¡Te esperamos nuevamente!</p>
              <p>Saludos cordiales,</p>
              <p>El equipo de DressMe</p>
            </div>
          </body>
        </html>
      `,
    };

    let info = await transporter.sendMail(buyEmail);
    console.log("Correo electrónico de agradecimiento enviado");
  } catch (error) {
    console.log(error);
  }
}


module.exports = sendEmail;

 

    










