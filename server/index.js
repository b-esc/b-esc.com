const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const port = 8080;

const app = express();
app.use(body_parser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(port, () =>{
  console.log(`server listening port: ${port}`);
});
