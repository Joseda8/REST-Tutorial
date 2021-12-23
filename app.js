const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/get_msg', (req, res) => {
    console.log (req);
    res.send({test_msg: "Hello there!"});
})

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
