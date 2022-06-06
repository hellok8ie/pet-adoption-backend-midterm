"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.editCat = exports.editCatPage = exports.oneCat = exports.addCat = exports.newCatPage = exports.getAllCats = exports.homeCatPage = void 0;
const cat_1 = require("../models/cat");
const homeCatPage = (req, res, next) => {
    res.redirect('/cats');
};
exports.homeCatPage = homeCatPage;
const getAllCats = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let catList = yield cat_1.Cat.findAll();
    res.render('all-cats', { catList });
});
exports.getAllCats = getAllCats;
const newCatPage = (req, res, next) => {
    res.render('add-cat');
};
exports.newCatPage = newCatPage;
const addCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newCat = req.body;
    yield cat_1.Cat.create(newCat);
    res.redirect('/cats');
});
exports.addCat = addCat;
const oneCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.catId;
    let selectedCat = yield cat_1.Cat.findByPk(itemId);
    if (selectedCat) {
        res.render('cat-detail', { foundCat: selectedCat });
    }
    else {
        res.status(404).render('error', { message: 'Cat not found' });
    }
    ;
});
exports.oneCat = oneCat;
const editCatPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.catId;
    let selectedCat = yield cat_1.Cat.findOne({
        where: { catId: itemId }
    });
    if (selectedCat) {
        res.render('edit-cat', { foundCat: selectedCat });
    }
    else {
        res.status(404).render('error', { message: 'Cat not found' });
    }
    ;
});
exports.editCatPage = editCatPage;
const editCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.catId;
    let updatedCat = req.body;
    let [updated] = yield cat_1.Cat.update(updatedCat, {
        where: { catId: itemId }
    });
    if (updated === 1) {
        res.redirect('/cats');
    }
    else {
        res.render('error', { message: 'Cat could not be updated' });
    }
    ;
});
exports.editCat = editCat;
const deleteCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.catId;
    let deleted = yield cat_1.Cat.destroy({
        where: { catId: itemId }
    });
    if (deleted) {
        res.redirect('/cats');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find the cat' });
    }
    ;
});
exports.deleteCat = deleteCat;
