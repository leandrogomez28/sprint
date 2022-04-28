const { response } = require("express")
const Cities = require("../models/cities.js")

const Itinerary = require("../models/itinerary.js")

const citiesController = {
    ObtenerDatos: async (req, res) => {
        let cities
        let error = null
        try {

            cities = await Cities.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response:error?"ERROR":{cities},
            success:error ? false:true,
            error:error

        })

    },

    ObtenerItinerary:async(req,res)=>{
        let itineraries
        console.log(req.params)
        const city =req.params.city
        let error=null

        try {
            itineraries= await Itinerary.find({city:city})
            
        } catch (err) {
            error=err
            console.log(error)
            
        }

        res.json({
            response:error?"ERROR":{itineraries},
            success:error? false:true,
            error:error
        })

        
    },

    likeDislike:async(req,res)=>{
        const id=req.params.id;
        const user=req.user.id
        let itineraries
        console.log(id)
        console.log(user)
        

        try {
            itineraries= await Itinerary.findOne({_id:id})
            if(itineraries.likes.includes(user)){

                Itinerary.findByIdAndUpdate({_id:id},{$pull:{likes:user}},{new:true})
                .then(response=>res.json({success:true,response:response.likes}))
                .catch(error=>console.log(error))
            }
            else{
                Itinerary.findByIdAndUpdate({_id:id},{$push:{likes:user}},{new:true})
                .then(response=>res.json({success:true,response:response.likes}))
                .catch(error=>console.log(error))
            }
        } catch (err) {
            error=err
            res.json({success:false,resposne:error})
            
        }


        
    }
    }

module.exports= citiesController