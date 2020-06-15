const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
  return res.send(200).sendFile('index.html');
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
