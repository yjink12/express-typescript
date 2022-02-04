import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import router from './routes';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

class Server {
    private app: express.Application;

    private readonly viewDir = path.join(__dirname, 'views');
    private readonly staticDir = path.join(__dirname, 'public');

    constructor(){
        this.app = express();
        
        this.initMiddlewares();
        this.initRoutes();
        this.initDir();
    }
    
    private initRoutes(){
        router(this.app);
    }

    private initMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
    }

    private initDir(){
        this.app.set('view engine', 'ejs');
        this.app.set('views', this.viewDir);
        this.app.use(express.static(this.staticDir));
    }

    // private initError(){
    //     this.app.use(function(err:Error, req:Request, res:Response, next:NextFunction) {
            
    //       });
    // }

    public getInstance(){
        return this.app;
    }
}

export default Server;