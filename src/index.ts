import Server from "./server";
import { sequelize } from "./models"; 

const server = new Server();
const app = server.getInstance();

//const port = Number()
app.listen(3000, async () => {
    console.log('start');
    // await sequelize.authenticate()
    // .then(()=>{
    //     console.log('db connection success');
    // })
    // .catch((error) => {
    //     console.log('error: '+ error);
    // })
});
