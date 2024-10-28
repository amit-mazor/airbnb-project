const apartmentsModel = require('../services/apartmentService')
exports.getMain = (req, res, next) => {
    apartmentsModel.getAll().then(result=>{
      console.log(req);
        res.render('index', {
          pageTitle: 'Main Page',
          apartmentList:  result
        })});
    }
  exports.apartmentPage = (req, res, next) => {
      apartmentsModel.getApartmentById(req.params.id).then(result=>{
          res.render('apartment', {
            pageTitle: 'Apartment',
            apartment:  result,
            minDate: new Date()
          })});
      }
exports.getLogin = (req, res, next) => {
      res.render('login', {
        pageTitle: 'Login Page'
      });
  }
  exports.getRegister = (req, res, next) => {
    res.render('register', {
      pageTitle: 'Registration Page'
    });
}
exports.getError = (req, res, next) => {
  res.render('error', {
    pageTitle: 'Error Page'
  });
}
  
    