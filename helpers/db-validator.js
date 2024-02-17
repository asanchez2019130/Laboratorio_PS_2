const Usuario = require('../models/usuario');
const Student = require('../models/student');
const Cursos = require('../models/cursos')

const existeCurso = async (nombre = '') => {
    const existeCurso = await Cursos.findOne({ nombre });
    if (existeCurso) {
        throw new Error(`El curso ${nombre} ya fue registrado`)
    }
}

const existeCursoById = async (id = "") => {
    const exiteCursoById = await Cursos.findOne({ id });
    if (exiteCursoById) {
        throw new Error(`El Curso con el id ${id} no existe`);
    }
}

const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El email ${correo} ya fue registrado`);
    }
}

const existeUsuarioById = async (id = '') => {
    const existeUsuarioById = await Usuario.findOne({ id });
    if (existeUsuarioById) {
        throw new Error(`El usuario con el id ${id} no existe`);
    }
}

const existeStudent = async (correo = '') => {
    const existeStudent = await Student.findOne({ correo });
    if (existeStudent) {
        throw new Error(`El email ${correo} ya fue registrado`);
    }
}

const existeStudentById = async (id = '') => {
    const existeStudentById = await Student.findOne({ id });
    if (existeStudentById) {
        throw new Error(`El student con el id ${id} no existe`);
    }
}

const esRolValido = async (role = '') => {
    const existeRol = await role.findOne({ role });

    if (!existeRol) {
        throw new Error(`El role ${role} no existe en base de datos`)
    }
}

module.exports = {
    existeUsuarioById,
    existenteEmail,
    esRolValido,
    existeStudent,
    existeStudentById,
    existeCurso,
    existeCursoById
}