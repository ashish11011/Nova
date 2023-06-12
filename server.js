const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

///////////////////////// GET /////////////////////////

let desList_cotton = [
  {
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    count: +56,
  },
  {
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    count: +56,
  },
  {
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    count: +56,
  },
];

let desList_silk = [
  {
    des: "It is a long established fact that",
    count: +56,
  },
  {
    des: "It is a long established fact that",
    count: +56,
  },
  {
    des: "It is a long established fact that",
    count: +56,
  },
];

let typeOfFiber = [
  {
    fiberType: "Cotton",
    count: 156,
  },
  {
    fiberType: "Silk",
    count: 299,
  },
];

///////////////////////// GET /////////////////////////

app.get("/", (req, res) => {
  res.render("index", { typeOfFiber: typeOfFiber });
});

app.post("/click", (req, res) => {
  console.log("click request body", req.body);
  // res.redirect('/details');
  res.send("ok");
});

app.get("/details", (req, res) => {
  res.render("details", { desList_cotton: desList_cotton });
});

app.post("/", (req, res) => {
  // console.log(req.body);
  const { des, count } = req.body;
  desList_cotton.push({ des, count });
  res.redirect("details");
});
app.listen(3000, () => console.log("Server running on port 3000"));
