const { generarJWT } = require("../helpers/generar-jwt");
const Usuario = require("../models/usuario");
const bycriptjs = require('bcryptjs');

const login = async (req, res) => {
    const { correo, password } = req.body;

    try {
        //Verificar que el correo exista
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                msg: 'El correo no esta registrado'
            });
        }

        // Verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'El usuario no existe en la base de datos'
            });
        }

        // Verificar que la contraseña sea la correcta

        const validPassword = bycriptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Contraseña incorrecta'
            });
        }

        //
        const token = await generarJWT(usuario.id);
        

        res.status(200).json({
            msg: 'Login OK',
            usuario,
            token
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: 'comuniquese con el administrador'
        })
    }
}



module.exports = { login }