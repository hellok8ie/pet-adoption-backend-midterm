import { RequestHandler } from "express";
import { Cat } from "../models/cat";

export const homeCatPage: RequestHandler = (req,res,next) => {
    res.redirect('/cats');
};

export const getAllCats: RequestHandler = async (req,res,next) => {
    let catList: Cat[] = await Cat.findAll();
    res.render('all-cats', { catList });
};

export const newCatPage: RequestHandler = (req,res,next) => {
    res.render('add-cat');
};

export const addCat: RequestHandler = async (req,res,next) => {
    let newCat: Cat =req.body;
    await Cat.create(newCat);
    res.redirect('/cats');
};

export const oneCat: RequestHandler = async (req,res,next) => {
    let itemId = req.params.catId;
    let selectedCat: Cat | null = await Cat.findByPk(itemId);

    if (selectedCat) {
        res.render('cat-detail', {foundCat: selectedCat});
    } else {
        res.status(404).render('error', {message: 'Cat not found'});
    };
};

export const editCatPage: RequestHandler = async (req,res,next) => {
    let itemId = req.params.catId;
    let selectedCat: Cat | null = await Cat.findOne({
        where: { catId: itemId}
    });

    if (selectedCat) {
        res.render('edit-cat', { foundCat: selectedCat });
    } else {
        res.status(404).render('error', { message: 'Cat not found'});
    };
};

export const editCat: RequestHandler = async (req,res,next) => {
    let itemId = req.params.catId;
    let updatedCat: Cat = req.body;

    let [updated] = await Cat.update(updatedCat, {
        where: { catId: itemId}
    });

    if (updated === 1) {
        res.redirect('/cats');
    } else {
        res.render('error', { message: 'Cat could not be updated'});
    };
};

export const deleteCat: RequestHandler = async (req,res,next) => {
    let itemId = req.params.catId;
    let deleted = await Cat.destroy ({
        where: { catId: itemId }
    });

    if (deleted) {
        res.redirect('/cats')
    } else {
        res.status(404).render('error', { message: 'Cannot find the cat'});
    };
};