const Usuario = require('../models/usuario');

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

const esRolValido = async (role = '') => {
    const existeRol = await role.findOne({ role });

    if (!existeRol) {
        throw new Error(`El role ${role} no existe en base de datos`)
    }
}

module.exports = {
    existeUsuarioById,
    existenteEmail,
    esRolValido
}