const Router= require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerDatos, ObtenerItinerary}= citiesController
const usersControllers=require("../controllers/usersControllers")
const {newUser,verifyEmail}=usersControllers
const validator=require("../controllers/validator")


Router.route("/datos")
.get(ObtenerDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerary)

Router.route("/signup")
.post(validator,newUser)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

module.exports = Router