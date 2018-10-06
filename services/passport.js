//use for Oauth 
const passport = require('passport'); //require the npm passport module not the passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy; 

const keys = require('../config/keys') //we dont have to add file extension for js files 

// ./ means the current directory ../ means one level above 


passport.use(new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refershToken, profile,done) => {
		console.log(accessToken);
		console.log(refershToken);
		console.log(profile);
	})
);  
