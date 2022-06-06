import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express(); //Setting up express app
app.use(morgan('dev'));//Logging

app.use(express.json()); //Parsing request body data
app.use(express.urlencoded({extended: true})); //Parsing request query data

app.use(express.static(path.join(__dirname, '../src/public'))); //Configuring public folder to serve static files

//Configuring handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

//404 error handling
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
});

app.listen(3000);