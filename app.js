const morgan = require('morgan');
const express = require('express');
const app = express();

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController.js');

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.all('*', (req, res, next) => {
    /*res.status(404).json({
      status: 'fail',
      message: `can't find ${req.originalUrl}`,
    });*/
    next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;