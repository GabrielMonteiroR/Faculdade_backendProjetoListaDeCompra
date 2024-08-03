import express from 'express';
const app = express();
const port = 4000;

app.get('/health', (req, res) => {
    res.send("Server health is Ok!");
})

app.listen(port, () => {
    return console.log(`Server running on port ${port}`);
})