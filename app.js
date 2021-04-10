const morgan = require('morgan');
const express = require('express');
const app = express();

const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController.js');

const userRouter = require('./routes/userRoutes');
const featureRouter = require('./routes/featureRoutes');
const landingRouter = require('./routes/landingRoutes');
const partnerRouter = require('./routes/partnerRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const teamRouter = require('./routes/teamRoutes');


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/storage`));

app.use('/api/v1/features', featureRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/landings', landingRouter);
app.use('/api/v1/partners', partnerRouter);
app.use('/api/v1/services', serviceRouter);
app.use('/api/v1/team', teamRouter);

app.all('*', (req, res, next) => {
    /*res.status(404).json({
      status: 'fail',
      message: `can't find ${req.originalUrl}`,
    });*/
    next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);
module.exports = app;