import express, { Request, Response, NextFunction } from 'express';

export default(app:express.Application) => {
    app.use('/test', (req:Request, res:Response, next:NextFunction)=>{
        res.send('hio');
    });
}