const nodemailer = require("nodemailer")
const crypto = require("crypto")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Comments = require("../models/comments.js")



const comentsControllers = {


    cargaComentarios: async (req, res) => {
        let { itinerario, message, user } = req.body.dataComents
        console.log(req.body.dataComents)

        new Comments({
            itinerario: itinerario,
            user: user,
            comment: message
        }).save()
        let comentario
        try {
            comentario = await Comments.find({ itinerario: itinerario }).populate("user")

        } catch (error) {
            console.log(error)
        }

        res.json({ success: true, response: { comentario },message:"your comment was sent"})

    },

    obtenerComentarios: async (req, res) => {
        console.log(req.body)
        let id = req.params.id;

        let comentario
        try {
            comentario = await Comments.find({ itinerario: id }).populate("user")

        } catch (error) {
            console.log(error)

        }
        res.json({ success: true, response: { comentario } })


    },



    borrarComentario: async (req, res) => {
        let id = req.params.id;

        let comentario
        try {
            comentario = await Comments.findOneAndDelete({ _id: id })

        } catch (error) {
            console.log(error)

        }
        res.json({ success: true, response: { comentario },message:"your comment was deleted" })

    },


    modificarComentario: async (req, res) => { 
        let id = req.params.id;
        console.log(req.body)
        let newComents = { comment: req.body.data }

        console.log(newComents)

        let comentario
        try {
            comentario = await Comments.findOneAndUpdate({ _id: id }, newComents)

        } catch (error) {
            console.log(error)

        }

        res.json({ success: true, response: { comentario },message:"your comment was modified" })


    }




}
module.exports = comentsControllers;