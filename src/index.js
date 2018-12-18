const express = require('express');
const morgan = require('morgan');

const indexRouter = require('./routes/index.routes');
const tasksApiRouter = require('./routes/api/tasks.routes');

const app = express();

// DB connection
const { mongoose } = require('./database'); 

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/api/tasks', tasksApiRouter);

// Static File


// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})