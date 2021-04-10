const User = require('./../models/User');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


exports.getAllUsers = catchAsync(async (req, res, next) => {
   
    const users = await User.find();

    if(!users){
       return next(new AppError('No users found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: users.length,
        users
    });

});

exports.createUser = catchAsync(async (req, res, next) => {
    const newUser = await User.create(req.body);
  
    if(!newUser){
       return next(new AppError('Invalid fields or duplicate user', 401));
    }
  
    res.status(201).json({
        status: 'success',
        newUser
    });
});


exports.updateUser = catchAsync(async(req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
  
    if(!user){
       return next(new AppError('Invalid fields or No user found with this ID', 404));
    }
  
    res.status(203).json({
        status: 'success',
  
    });
});
  
  
exports.deleteUser = catchAsync(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
  
    if(!user){
       return next(new AppError('No user found with this ID', 404));
    }
  
    res.status(203).json({
        status: 'success',
    });
});