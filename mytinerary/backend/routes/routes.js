const Router= require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerDatos, ObtenerItinerary}= citiesController


Router.route("/datos")
.get(ObtenerDatos)

Router.route("/itinerary/:city")
.get(ObtenerItinerary)

module.exports = Router