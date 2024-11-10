const apartmentService = require('../services/apartmentService')
const ordersService= require('../services/orderService')
const userService= require('../services/userService')
exports.getMain = (req, res, next) => {
    apartmentService.getAll().then(result=>{
        res.render('index', {
          pageTitle: 'Main Page',
          apartmentList:  result,
          user: req.session.user
        })});
    }
    exports.getOrders = (req, res, next) => {
      ordersService.getAll(req.session.user).then(result=>{
          res.render('orders', {
            ordersList:  result,
            user: req.session.user
          })});
    }
      
  exports.apartmentPage = (req, res, next) => {
      apartmentService.getApartmentById(req.params.id).then(result=>{
          res.render('apartment', {
            pageTitle: 'Apartment',
            apartment:  result,
            minDate: new Date(),
          user: req.session.user
          })});
      }
exports.getLogin = (req, res, next) => {
      res.render('login', {
        pageTitle: 'Login Page',
        user: req.session.user

      });
  }
  exports.getRegister = (req, res, next) => {
    res.render('register', {
      pageTitle: 'Registration Page',
      user: req.session.user

    });
}
exports.getError = (req, res, next) => {
  res.render('error', {
    pageTitle: 'Error Page',
    user: req.session.user
  });
}
exports.getAdmin = (req, res, next) => {
  // Check if the user is an admin
  if (req.session.user && req.session.user.isAdmin) {
      apartmentService.getAll().then(apartments=>{
        userService.getAll().then(users=>{
          res.render('admin', {
            pageTitle: 'Main Page',
            apartmentList:  apartments,
            usersList:  users,
            user: req.session.user
          })});
        })
  } else {
      res.redirect('/error'); // Redirect to error page if not admin
  }
};
  
    