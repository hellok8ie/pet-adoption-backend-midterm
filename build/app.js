"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const models_1 = require("./models");
const catControllers_1 = require("./controllers/catControllers");
const catRoutes_1 = __importDefault(require("./routes/catRoutes"));
const app = (0, express_1.default)(); //Setting up express app
app.use((0, morgan_1.default)('dev')); //Logging
app.use(express_1.default.json()); //Parsing request body data
app.use(express_1.default.urlencoded({ extended: true })); //Parsing request query data
app.use(express_1.default.static(path_1.default.join(__dirname, '../src/public'))); //Configuring public folder to serve static files
//Configuring handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });
app.use('/cats', catRoutes_1.default); //Configures routes
app.use('/', catControllers_1.homeCatPage);
//404 error handling
app.use((req, res, next) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});
models_1.db.sync().then(() => {
    console.info("DB Connection Success!");
});
app.listen(3000);
