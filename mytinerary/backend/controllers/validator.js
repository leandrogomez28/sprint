const joi = require("joi")


const validator = (req, res, next) => {

    console.log(req.body.newUser)

    const Schema = joi.object({

        firstname: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min": "el nombre debe mantener al menos 3 caracteres",
            "string.empty": "el campo no puede estar vacio"
        }),

        lastname: joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min": "El apellido debe contener al menos 3 caracteres",
            "string.empty": "El campo no puede estar vacio"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            "string.email": "formato no valido"
        }),

        password: joi.string().max(30).min(6).trim().pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
            "string.pattern.base": "la contraseña debe contener minimo una mayuscula, una minuscula y un numero",
            "string.min": "El password debe mantener al menos 6 caracteres",
            "string.pattern": "La constraseña debe ser alfanumerica"
        }),
        
        from: joi.string(),

        

    })
    const validation = Schema.validate(req.body.newUser, { abortEarly: false })
    if (validation.error) {
        return res.json({ success: "falseVAL", response: validation })
    }
    next()
}

module.exports = validator




