import { Router } from "express";
import { getAllCats, newCatPage, addCat, oneCat, editCatPage, editCat, deleteCat } from "../controllers/catControllers";

const router = Router();

router.get('/', getAllCats);

router.get('/new', newCatPage);

router.post('/new', addCat);

router.get('/edit/:catId', editCatPage);

router.post('/edit/:catId', editCat);

router.post('/delete/:catId', deleteCat);

router.get('/:catId', oneCat);

export default router;