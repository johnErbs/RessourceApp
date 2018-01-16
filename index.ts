///
// deployed on Heroku
// Url: https://ressource001.herokuapp.com/
///
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import {Object} from './models/data';
import * as cors from 'cors';
import { isNullOrUndefined } from 'util';

//setup express app
const app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false })

/*Middleware ...*/
app.use(cors());
app.use(bodyParser.json());
app.use((err: any, req: any, res: any, next: any) => {
    res.status(422).send({errInfo: err.message})
});

/*MONGO connection...*/
//ConnectionString to mongoo-DB (Creates obj schema in DB)
//mongoose.connect('mongodb://localhost/obj');
//Overwrites to the global Node.js Promise prop.
//(<any>mongoose).Promise = global.Promise;

/*HTTP Methods...*/
app.get('/api/obj', (req, res) =>{
    let testMsg = "Get Request"
    console.log(testMsg);
    res.send(testMsg);
});

app.post('/api/obj', urlencodedParser, (req, res) =>{
    let testMsg = "Get Request"
    console.log(testMsg);
    //res.send(testMsg);

    let data = req.body;
    console.log(data);

    if(req.body.Key === ""){
        console.log("FUCK");
        res.send(data);
    }else{
        console.log("bla bla bla");
        res.send("data is not defined!");
    }
});

app.put('/api/obj', (req, res) =>{

});

app.delete('/api/obj', (req, res) =>{

});

//start the API server & listens for requests
let server = app.listen(process.env.PORT || 3000, () => {
    let port = server.address().port;
    console.log("App now running on port", port);
});
 


