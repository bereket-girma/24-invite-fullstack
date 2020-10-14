const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let goingList = [];
let notGoingList = [];

app.get("/api", (req, res) => {
  // res.json(randomUser())
  axios.get("https://randomuser.me/api/").then((r) => {
    const user = r.data.results[0];
    res.json({
      first: user.name.first,
      last: user.name.last,
      phone: user.phone,
      email: user.email,
      picture: user.picture.large,
    });
  });
});

app.get("/api/going", (req, res) => {
  res.json(goingList);
});

app.get("/api/notGoing", (req, res) => {
  res.json(notGoingList);
});

app.post("/api/mark-invitee", (req, res) => {
  if (req.body.going === true) {
    goingList.push(req.body);
  } else if (req.body.going !== true) {
    notGoingList.push(req.body);
  }

  console.log(goingList);
  res.json({ success: true });
});

app.listen(3001, (req, res) => {
  console.log("listening on port 3001");
});
