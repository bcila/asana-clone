const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const loaders = require('./loaders');
const { ProjectRoutes } = require('./api-routes');

config(); // Yerlerinin degismemesi gerekir
loaders(); // Yerlerinin degismemesi gerekir

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    console.log(`Sunucu ayaga kalti...`);
    app.use('/projects', ProjectRoutes)
});
