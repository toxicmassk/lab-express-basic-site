const express = require("express");
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

const app = express();

app.set("view engine", "hbs");

app.set("views", __dirname + "/views");

app.get("/", (request, response) => {
  response.render("about");
});

const aboutData = {
  firstName: "Albert",
  lastName: "Einstein",
  birth: {
    year: "14.3.1879",
    location: "Ulm, Germany",
  },
  death: {
    year: "18.04.1955",
    location: "Plainsboro, US",
  },
  profession: "theoretical physicist",
  images: [
    {
      image1: "./Rabindranath_with_Einstein.jpg",
    },
    {
      image2: "./Albert_Einstein_(Nobel).png",
    },
  ],
};

app.get("/about", (request, response) => {
  response.render("about", aboutData);
});

app.listen(3001);
