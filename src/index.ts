import express, { urlencoded } from 'express';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/', viewRoute);
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`Started server at port ${PORT}`);
})