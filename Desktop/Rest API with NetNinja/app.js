const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const dbURI =
  'mongodb+srv://flaboy:flaboy123@acadera.hqkcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, console.log(`server is listening on ${PORT}`));
    console.log('Db connected as well');
  });

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
