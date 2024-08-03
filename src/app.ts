import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/itemRoutes';

const app = express();
const port = 4000;

app.use(cors()); 
app.use(express.json());

app.get('/health', (req, res) => {
    res.send("Server health is Ok!");
});

app.use(itemRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
