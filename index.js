const express = require("express");
const cookieParser = require('cookie-parser')

const csurf = require('csurf');

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render('index', { users: users } );

});

app.get('/create', (req,res) => {
  res.render('create-user', {  })
})


app.use(cookieParser())

const csrfProtection = csurf({ cookie: true })

// const form = [
//   {
// csrf:
// firstName:
// lastName:
// email:
// password:
// confirmedPassword:
//   }
// ]

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
