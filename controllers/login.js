var express = require ('express');
var home = require('./home');
var mysql =require('mysql');
var session = require ('express-session');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require ('./models/db_controller');
var  sweetalert = require('sweetalert2');
const { check, validationResult } = require('express-validator');


router.get("/loop/:id",(req,res)=>{
   var id=req.params.id;
   res.send("poko");
});

router.get('/', function(req ,res){

    res.render('login.ejs');
});

var con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hms'
});

router.use(session({

    secret: 'secret',
    resave : true ,
    saveUninitialized : true 

}));


router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());


router.post('/',[
    check('username').notEmpty().withMessage("Username is reequired"),
    check('password').notEmpty().withMessage("Password is reequired")
    
], function(request , response){
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
      }

    var username = request.body.username;
    var password = request.body.password;

    if (username && password){
        con.query('select * from users where username = ? and password = ?' , [username, password], function(error , results , fields){
            if (results.length > 0){
                
                request.session.loggedin = true ; 
                request.session.username = username;
                response.cookie('username' , username);
                var status = results[0].email_status;
                if (status=="not_verified" ){
                    response.send("please verify your email");
                }
                else{
                    if(results[0].status=="patient"){
                        response.cookie('patient', results[0]);
                        response.redirect("/patient");
                    }else if(results[0].status=='doctor'){
                        response.cookie('doctor', results[0]);
                        response.redirect("/patient/dd");
                    }
                    else{
                        sweetalert.fire('logged In!');
                    response.redirect('/home');
                    }
                    
                }
               
            }else{
                response.send('Incorrect username / password');
            }
            response.end();
        });

    }else{
        response.send('please enter user name and password');
        response.end();
    }

});

module.exports = router;