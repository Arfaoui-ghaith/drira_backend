const Team = require('./../models/Team');
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
  dest: 'storage/images/members',
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadMemberPhoto = upload.single('photo');

exports.resizeMemberPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `member-${req.body.first_name+'_'+req.body.last_name}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(400, 500)
    .toFormat('jpeg')
    .toFile(`storage/images/members/${req.file.filename}`);
    req.body.image = req.file.filename;
  next();
});

exports.getAllTeam = catchAsync(async (req, res, next) => {
   
    const members = await Team.find();

    if(!members){
       return next(new AppError('No members found.', 404));
    }

    res.status(200).json({
        status: 'success',
        results: members.length,
        members
    });

});

exports.createMember = catchAsync(async (req, res, next) => {
    
    const newMember = await Team.create(req.body).catch(err => {
        return next(new AppError('Invalid member to create.',400));
    });

    res.status(201).json({
        status: 'success',
        classe: newMember
    });
    
});

exports.updateMember = catchAsync(async (req, res, next) => {
    
    const member = await Team.findByIdAndUpdate(req.params.id, req.body);

    if(!member){
        return next(new AppError('No member with this ID OR Invalid fields to update.',404));
    }

    res.status(201).json({
        status: 'success'
    });

});

exports.deleteMember = catchAsync(async (req, res, next) => {
   
    const member = await Team.findByIdAndDelete(req.params.id);

    if(!member){
        return next(new AppError('No member with this ID.',404));
    }

    res.status(204).json({
        status: 'success',
    });

});