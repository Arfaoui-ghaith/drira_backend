const Feature = require('./../models/Feature');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


exports.getAllFeatures = catchAsync(async (req, res, next) => {
   
    const features = await Feature.find();

    if(!features){
       return next(new AppError('No features found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: features.length,
        features
    });

});

exports.createFeature = catchAsync(async (req, res, next) => {
    
    const newFeature = await Feature.create(req.body).catch(err => {
        return next(new AppError('Invalid feature to create.',400));
    });

    res.status(201).json({
        status: 'success',
        classe: newFeature
    });
    
});

exports.updateFeature = catchAsync(async (req, res, next) => {
    
    const feature = await Feature.findByIdAndUpdate(req.params.id, req.body);

    if(!feature){
        return next(new AppError('No feature with this ID OR Invalid fields to update.',404));
    }

    res.status(201).json({
        status: 'success'
    });

});

exports.deleteFeature = catchAsync(async (req, res, next) => {
   
    const feature = await Feature.findByIdAndDelete(req.params.id);

    if(!feature){
        return next(new AppError('No feature with this ID.',404));
    }

    res.status(204).json({
        status: 'success',
    });

});