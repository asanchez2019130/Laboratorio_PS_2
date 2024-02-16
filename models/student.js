const { Schema, model } = require("mongoose")
const StudentSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        required: [true, 'El password es obligatorio']
    },
    asignatura: {
        required: [true, 'La asignatura es obligatoria']
    },
    role : {
        type: String,
        default: "STUDENT_ROLE"
    },
    estado:{
        type: Boolean,
        default: true
    }
})

module.exports = model('Usuario', UsuarioSchema)