import {Request, Response, NextFunction} from 'express';
//import User from '../../models/Users';
import Users from '../../models/Users';

export async function addUser(req:Request, res:Response, next:NextFunction) {
    try{
        const user = req.body;
        //const user = new User();
        const result = await Users.create(user);

        if(result){
            res.status(200).json({result:'success'});
        }else{
            res.status(400).json({result:'fail'});
        }

    }catch(err){
        console.log(err);
    }
};
export async function deleteUser(req:Request, res:Response, next:NextFunction){
    try{
        const {id} = req.params;
        const result = await Users.destroy({
            where: {
                id : id 
            }
        });
        if(result){
            res.status(200).json({result:'success'});
        }else{
            res.status(400).json({result:'fail'});
        }

    }catch(err){
        console.log(err);
    }
}