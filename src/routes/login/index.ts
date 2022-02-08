import { Request, Response, NextFunction, Router } from "express";
import { addUser, deleteUser } from "./Users";

const router: Router = Router();

router.get('/', (req:Request, res:Response, next:NextFunction)=> {
    res.render('login', {title:'login page'});
});
router.post('/', addUser);
router.delete('/:id', deleteUser);

export default router;