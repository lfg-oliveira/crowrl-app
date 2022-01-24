import express, { urlencoded } from 'express';
import apiRoutes from './routes/api.routes';
import cors from 'cors';
import { redirect } from './middleware/routes.middleware';


const PORT = process.env.PORT || 5050;
const app = express();


app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + "/client/build"));


app.use('/api', apiRoutes);

app.get("/:_id", redirect)

app.listen(PORT, () => {
    console.log(__dirname + "/client/build");
    
    console.log(`Started server at port ${PORT}`);
})