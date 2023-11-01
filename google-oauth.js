require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
// const { v4: uuidv4 } = require('uuid');
// const { UserModel } = require("./models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://time-trace-backend3.onrender.com/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // let email = profile._json.email
      // const user = new UserModel({
      //     email,
      //     password : uuidv4()
      // })
      // await user.save()

      return done(null, profile);
      //  console.log(profile)
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// module.exports  = {
//     passport
// }
