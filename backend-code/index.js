const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const User = require('./models/User');
const db = require("./mysetup/myurl").myurl;

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log("Error is ", err.message);
});

app.get('/healthz', cors(), (req, res) => {

    res.send('Tilt-o-Workout App Is Up And Healthy - Timestamp : ' + new Date().toUTCString());

})

app.post("/signup", async (req, res) => {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
  
    await User.findOne({ name: newUser.name })
      .then(async profile => {
        if (!profile) {
          await newUser
            .save()
            .then(() => {
              res.status(200).send(newUser);
            })
            .catch(err => {
              console.log("Error is ", err.message);
            });
        } else {
          res.send("User already exists...");
        }
      })
      .catch(err => {
        console.log("Error is", err.message);
      });
  });
  
app.post("/login", async (req, res) => {
    var newUser = {};
    newUser.name = req.body.name;
    newUser.password = req.body.password;
  
    await User.findOne({ name: newUser.name })
      .then(profile => {
        if (!profile) {
          res.send("User not exist");
        } else {
          if (profile.password == newUser.password) {
            res.send("User authenticated");
          } else {
            res.send("User Unauthorized Access");
          }
        }
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})