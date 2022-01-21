const path = require('path');
const express = require('express');
const compression = require('compression');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(compression());

app.use(
  '/',
  express.static(
    path.resolve(__dirname, '../dist/angular-ngrx-material-starter')
  )
);
app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
