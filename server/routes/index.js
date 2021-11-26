let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/*Post route for processing the login page*/
router.post('/login', indexController.processLoginPage);


/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/*Post route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);



/* GET to perform UserLogout*/
router.get('/logout', indexController.performLogout);


module.exports = router;
