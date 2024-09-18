import express from 'express'
import chalk from 'chalk'
import createDebug from 'debug'
import morgan from 'morgan'

const app = express();
const port = 1690;
const debug = createDebug('app');

app.use(morgan('comined'))

app.get("/", (req,res) =>{

    res.send('Hello NJ');

})

app.listen(port, ()=>{
    console.log("Listening on port" + chalk.green(port));
})