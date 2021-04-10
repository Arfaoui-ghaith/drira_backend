const Service = require('./../models/Service');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


exports.getAllServices = catchAsync(async (req, res, next) => {
   
    const services = await Service.find();

    if(!services){
       return next(new AppError('No services found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: services.length,
        services
    });

});

exports.createService = catchAsync(async (req, res, next) => {
    
    const newService = await Service.create(req.body).catch(err => {
        return next(new AppError('Invalid service to create.',400));
    });

    res.status(201).json({
        status: 'success',
        classe: newService
    });
    
});

exports.updateService = catchAsync(async (req, res, next) => {
    
    const service = await Service.findByIdAndUpdate(req.params.id, req.body);

    if(!service){
        return next(new AppError('No service with this ID OR Invalid fields to update.',404));
    }

    res.status(201).json({
        status: 'success'
    });

});

exports.deleteService = catchAsync(async (req, res, next) => {
   
    const service = await service.findByIdAndDelete(req.params.id);

    if(!service){
        return next(new AppError('No service with this ID.',404));
    }

    res.status(204).json({
        status: 'success',
    });

});