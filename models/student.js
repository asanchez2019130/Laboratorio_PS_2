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
        type: String,
        required: [true, 'El password es obligatorio']
    },
    asignatura: {
        type: String,
        required: [true, 'La asignatura es obligatoria']
    },
    role: {
        type: String,
        enum: ["STUDENT_ROLE"],
        default: "STUDENT_ROLE"
    },
    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('Student', StudentSchema)