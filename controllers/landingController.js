const Landing = require('./../models/Landing');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sharp = require('sharp');
const multer = require('multer');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image Please upload only images', 400), false);
  }
};

const upload = multer({
  dest: 'storage/images/landings',
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadLandingPhoto = upload.single('photo');

exports.resizeLandingPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `landing-${req.body.title.split(' ')[0]}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .toFile(`storage/images/landings/${req.file.filename}`);
    req.body.image = req.file.filename;
  next();
});


exports.getAllLandings = catchAsync(async (req, res, next) => {
   
    const landings = await Landing.find();

    if(!landings){
       return next(new AppError('No landings found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: landings.length,
        landings
    });

});

exports.createLanding = catchAsync(async (req, res, next) => {
    
    const newLanding = await Landing.create(req.body).catch(err => {
        return next(new AppError('Invalid landing to create.',400));
    });

    res.status(201).json({
        status: 'success',
        classe: newLanding
    });
    
});

exports.updateLanding = catchAsync(async (req, res, next) => {
    
    const landing = await Landing.findByIdAndUpdate(req.params.id, req.body);

    if(!landing){
        return next(new AppError('No landing with this ID OR Invalid fields to update.',404));
    }

    res.status(201).json({
        status: 'success'
    });

});

exports.deleteLanding = catchAsync(async (req, res, next) => {
   
    const landing = await Landing.findByIdAndDelete(req.params.id);

    if(!landing){
        return next(new AppError('No landing with this ID.',404));
    }

    res.status(204).json({
        status: 'success',
    });

});