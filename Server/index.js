const express = require('express');
const app = express();
const pool = require('./dbConfig');
const bcrypt = require('bcrypt');
const session = require('express-session');
const expressFlash = require('express-flash');
const flash = require('express-flash');
const req = require('express/lib/request');
const passport = require('passport');
const initializePassport = require('./passportConfig');
const {v4 : uuidv4} = require('uuid');
const multer = require('multer');
const nodemailer = require("nodemailer");
app.use(express.json())

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lifepal143@gmail.com',
    pass: 'qjbdjaqwozjyhbre'
  }
});

const condition_certificate = multer({
    limits:{
        fileSize:3000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
            return cb(new Error('This is not a correct format of the file'))
  
        cb(undefined,true)
    }
  })

initializePassport(passport);

app.use(express.urlencoded({ extended: false}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})); 

app.use(passport.initialize());
app.use(passport.session());

app.get('/dashboard', checkNotAuthenticated,(req, res) => {

})
app.get('/user/register', checkAuthenticated, (req, res) => {

})
app.get('/user/login', checkAuthenticated, (req, res) => {

})
app.get('/user/profile',(req, res) => {

})
app.get('/user/request',(req, res) => {

})

app.get('user/logout', (req, res) => {
    req.logOut();
    res.redirect("/user/login");
})

app.post('/createUsers', (req, res)=>{
    const query = {
                text: 'CREATE TABLE users(user_id VARCHAR PRIMARY KEY,name VARCHAR(20), email VARCHAR(30), password VARCHAR(8) NOT NULL, address VARCHAR(100), units INT , exigency boolean DEFAULT false,condition_certi bytea, ph_no INT , adhar_no INT, blood_grp VARCHAR(38));'
            }
            pool.query(query, (err, res) => {
                if(err){
                    console.log('hello');
                    console.log(err.stack)
                }else{
                    console.log(res);
                }
            }
            );
            res.send('table created');
})

app.post('/createHospital', (req, res)=>{
    const query = {
                text: 'CREATE TABLE hospitalData (donor_id VARCHAR PRIMARY KEY,h_address VARCHAR NOT NULL, email_id VARCHAR, blood_grp VARCHAR(20) NOT NULL,ph_no INT NOT NULL, d_address VARCHAR(8) UNIQUE);'
            }
            pool.query(query, (err, res) => {
                if(err){
                    console.log('hello');
                    console.log(err.stack)
                }else{
                    console.log(res);
                }
            }
            );
            res.send('table created');
});

app.post('/createDonor', (req, res)=>{
    const query = {
                text: 'CREATE TABLE donorData (d_id VARCHAR PRIMARY KEY, email_id VARCHAR, blood_grp VARCHAR(20) NOT NULL,ph_no INT NOT NULL,d_address VARCHAR(8) NOT NULL, FOREIGN KEY (d_id) REFERENCES hospitalData(donor_id), FOREIGN KEY (d_address) REFERENCES hospitalData(d_address));'
            }
            pool.query(query, (err, res) => {
                if(err){
                    console.log('hello');
                    console.log(err.stack)
                }else{
                    console.log(res);
                }
            }
            );
            res.send('table created');
});

app.post('/createBloodBank', (req, res)=>{
    const query = {
                text: 'CREATE TABLE bloodBankData (bank_id VARCHAR(255) PRIMARY KEY, available_units VARCHAR(255), blood_grp VARCHAR(20),quotation NUMERIC (3, 2) , b_address VARCHAR(255), b_name VARCHAR(255));'
            }
            pool.query(query, (err, res) => {
                if(err){
                    console.log('hello');
                    console.log(err.stack)
                }else{
                    console.log(res);
                }
            }
            );
            res.send('table created');
});

app.post('/insertIntoBloodBank', (req, res) => {
    let { bank_id, b_name, b_address, blood_grp, available_units, quotation } = req.body

    const query = {
        text: 'INSERT INTO bloodBankData(bank_id, b_name, b_address, blood_grp, available_units, quotation) VALUES($1, $2, $3, $4, $5, $6)',
        values: [uuidv4(), b_name, b_address, blood_grp, available_units, quotation]
    }
    console.log(req.body)
    pool.query(query, (err,res) => {
        if(err){
            console.log('hello 4')
            console.log(err.stack);
        }
        else{
            console.log(res);
        }
    });
    res.send('values inserted')
});

app.post('/insertRequest', condition_certificate.array('condition_certificate',3),(req, res)=>{
    const imagesArray = []
    let { name, email, address, units, condition_certi, ph_no, adhar_no, user_id, exigency, blood_grp } = req.body;

            let errors = [];

            if(!name || !email || !address || !units || !ph_no || !adhar_no || !blood_grp){
                errors.push({message: "Please enter all fields" });
            }
            if(units <= 0 && units >9){
                errors.push({message: "These Many Units are Not Arrangeable" });
            }
            if(req.files == undefined){
                const query = {
                    text: 'UPDATE users SET address = $1, units = $2, ph_no = $3, adhar_no = $4, blood_grp = $5 WHERE user_id = $6',
                    values: [ address, units, ph_no, adhar_no, blood_grp, user_id]
                }
                pool.query(query, (err, res) => {
                    if(err){
                        console.log('hello1');
                        console.log(err.stack)
                    }else{
                        console.log(res);
                    }
                }
                );
            }
            else{
                req.files.forEach(element => imagesArray.push(element.buffer))
                const query = {
                    text: 'UPDATE users SET address = $1, units = $2, condition_certi = $3, ph_no = $4, adhar_no = $5, exigency = true, blood_grp = $6  WHERE user_id = $7',
                    values: [address, units, imagesArray, ph_no, adhar_no, blood_grp,user_id]
                }
                pool.query(query, (err, res) => {
                    if(err){
                        console.log('hello2');
                        console.log(err.stack)
                    }else{
                        console.log(res);
                    }
                }
                );
                res.send('table created');
            }
            if(exigency = false){

                const query = {
                    text: 'Select email_id, email, name, ph_no, address FROM d donorData,u users WHERE d.blood_grp = u.blood_grp'
                }

                pool.query(query, (err, res) => {
                    if(err){
                        console.log('hello5');
                        console.log(err.stack);
                    }else{
                        console.log(res);
                        res.send(res.rows[0]);
                        for (let i=0; i<res.rows.length; i++)
                        {
                            var mailOptions = {
                                from: 'lifepal143@gmail.com',
                                to: res.rows[i].email_id,
                                subject: 'Blood Request',
                                text: res.rows[i].name + res.rows[i].email + res.rows[i].address + res.rows[i].ph_no
                              };
                              
                              transporter.sendMail(mailOptions, function(error, info){
                                if (error) {
                                  console.log(error);
                                } else {
                                  console.log('Email sent: ' + info.response);
                                }
                              });
                        };
                        
                    }
                }
                );
            }
            else {
                const query = {
                    text: 'Select available_units, quotation, b_address,b_name FROM a bloodBankData, b users where a.blood_grp = b.blood_grp'
                }
                pool.query(query, (err, res) => {
                    if(err){
                        console.log('hello3');
                        console.log(err.stack)
                    }else{
                        console.log(res);
                        res.send(res.rows[0]); 
                    }
                    
                }
                );
                
            }
})

app.post('/user/register',async (req, res) => {

    let { name, email, password, password2 } = req.body;

    let errors = [];

    if(!name || !email || !password || !password2){
        errors.push({message: "Please enter all fields" });
    }
    if(password.length < 8){
        errors.push({message: "Your password must be of 8 charecters long" });
    }
    if(password != password2){
        errors.push({message: "Passwords do not match" });
    }
    else{
        let hashPassword = await bcrypt.hash(password);
         pool.query(`SELECT * FROM users WHERE email = $1`,[email],(err, results) => {
             if(err){
                 throw err;
             }
             if(results.rows.length > 0){
                errors.push({ message: "Email already registered"});
             }else {
                 pool.query(`INSERT INTO users (user_id, name, email, password) VALUES ($1, $2, $3, $4)`,
                 [req.user.id, name, email, hashPassword], (err, results)=>{
                    if(err){
                        throw err;
                    }

                 })
             }
         })
    }
})

app.post('/user/login', passport.authenticate('local', {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login"
}))

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return res.redirect("/user/dashboard");
    }
    next();
}
function checkNotAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/user/login");
}


app.listen(3000, ()=> {
    console.log('server is listening on port 3000');
});