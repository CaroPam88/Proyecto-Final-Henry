require('dotenv').config();
const fs = require('fs');
const path = require('path');
const {Sequelize} = require('sequelize');

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT} = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
	{
		logging: false,
		native: false,
	}
);

//devuelve el nombre del archivo sin la ruta completa
const basename = path.basename(__filename);

const modelDefiners = [];

//cargar en el array modelDefiner todos los modelos de Sequelize definidos en archivos js que estan almacenados en "models"
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 &&
			file !== basename &&
			file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

//carga todos los modelos de sequelize
modelDefiners.forEach((model) => model(sequelize));

//Capitaliza todos los modelos
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

//Accedo a los modelos haciendo destructuring
let {Clothes, Color, Size} = sequelize.models;

/////////////ACA VAN LAS RELACIONES//////////////////////////

//////////////////////////////////////////////////////

module.exports = {
	...sequelize.models,
	conn: sequelize,
	Op,
};
