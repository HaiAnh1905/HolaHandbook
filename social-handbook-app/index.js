import express from "express";
const app = express();
app.use(express.json())

app.post('/users', (req,res) => {
    const body = req.body;
    res.send(body);
})

app.get('', (req, res) => {
    res.end("Hello World")
})

app.listen(8080, () => {
    console.log('Server is running');
    
})