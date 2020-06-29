const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
  return res.send(200).sendFile('index.html');
});

// Declare our catch-all
app.use('*', (req, res) => {
  return res.sendStatus(404);
});

// Declare Global Error Handler:
const globalErrorHandler = (err, req, res, next) => {
  const defaultErr = {
    log: 'Inside the Global Error Handler',
    status: 500,
    message: { err: 'Error has occurred' },
  };
  let errObject = Object.assign({}, defaultErr, err);
  res.sendStatus(errObject.status).json(errObject.message);
};

app.use(globalErrorHandler);

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
