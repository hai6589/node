const express = require('express');
const app = express();
const port = 3000;

app.get('/tin_tuc', (req, res) => res.send('Helll word'));

app.listen(port, () => console.log(`Example app listening at http://locahost:${port}`));

