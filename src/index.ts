import express, { urlencoded } from 'express';
import apiRoutes from './routes/api.routes';
import cors from 'cors';
const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.static(__dirname + "client/build/"));

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`Started server at port ${PORT}`);
})