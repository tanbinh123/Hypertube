const express		=	require("express");
const app			=	express();
const http			=	require('http');
const path			=	require('path');
const bodyParser	=	require('body-parser');
const database		=	require('./Model/SQL.class.js');
const Session       =	require('express-session');
const cookieParser 	=	require('cookie-parser');


var session = Session({secret: 'pass', resave: true, saveUninitialized: true});

const index 		=	require('./Controllers/index.js');
const signin		=	require('./Controllers/signin.js');
const signup	=	require('./Controllers/signup.js');
const forgot_pwd	=	require('./Controllers/forgot_pwd.js');
const profile	=	require('./Controllers/profile.js');
const modify_profile	=	require('./Controllers/modify_profile.js');
const logout	=	require('./Controllers/logout.js');

// const port = 8080;
// const hostname = '127.0.0.1';

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session);

app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/signin', signin);
app.use('/signup', signup);
app.use('/forgot_pwd', forgot_pwd);
app.use('/modify_profile', modify_profile);
app.use('/profile', profile);
app.use('/logout', logout);


http.createServer(app).listen(3001);
// app.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });
