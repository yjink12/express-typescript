import express, { Request, Response, NextFunction } from 'express';
import login from '../routes/login'

export default(app:express.Application) => {
    app.use('/login', login);
}