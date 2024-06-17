const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =3000;

app.use(bodyParser.json());

app.post('/submit', 
    (req, res) => {
        const userData = req.body;
        console.log('User Data:', userData);

        // Here you can save the data to a database or perform other actions
        res.send('Data received successfully');
    }
);

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}/');
});