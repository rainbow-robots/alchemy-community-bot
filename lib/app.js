const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cookie-parser')());

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/jokes', require('./routes/jokes'));
app.use('/api/v1/moments', require('./routes/moments'));
app.use('/api/v1/emojis', require('./routes/emojis'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
