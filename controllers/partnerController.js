const Partner = require('./../models/Partner');
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
  dest: 'storage/images/partners',
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPartnerPhoto = upload.single('photo');

exports.resizePartnerPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `partner-${req.body.name.trim().replace(" ","_")}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .toFormat('jpeg')
    .toFile(`storage/images/partners/${req.file.filename}`);
    req.body.image = req.file.filename;
  next();
});

exports.getAllPartners = catchAsync(async (req, res, next) => {
   
    const partners = await Partner.find();

    if(!partners){
       return next(new AppError('No partners found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: partners.length,
        partners
    });

});

exports.createPartner = catchAsync(async (req, res, next) => {
    
    const newPartner = await Partner.create(req.body).catch(err => {
        return next(new AppError('Invalid partner to create.',400));
    });

    res.status(201).json({
        status: 'success',
        classe: newPartner
    });
    
});

exports.updatePartner = catchAsync(async (req, res, next) => {
    
    const partner = await Partner.findByIdAndUpdate(req.params.id, req.body);

    if(!partner){
        return next(new AppError('No partner with this ID OR Invalid fields to update.',404));
    }

    res.status(201).json({
        status: 'success'
    });

});

exports.deletePartner = catchAsync(async (req, res, next) => {
   
    const partner = await Partner.findByIdAndDelete(req.params.id);

    if(!partner){
        return next(new AppError('No partner with this ID.',404));
    }

    res.status(204).json({
        status: 'success',
    });

});