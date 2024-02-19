const { Router } = require('express');

const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { teacherGet, getTeacherByid, teacherPut, teacherDelete, teacherPost } = require('../controllers/teacher.controller');

const { existenteTeacher, existeTeacherById } = require('../helpers/db-validator')

const router = Router();

router.get("/", teacherGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeTeacherById),
        validarCampos
    ], getTeacherByid);

router.put(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeTeacherById),
        validarCampos
    ], teacherPut);

router.delete(
    "/:id",
    [
        check("id", "El id no es un formato valido de MongoDB").isMongoId(),
        check("id").custom(existeTeacherById),
        validarCampos
    ], teacherDelete);

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "el password debe de ser mayor a 6 caracteres").isLength({ min: 6 }),
        check("asignatura", "Asignaturas es obligatorio"),
        check("role", "role debe de ser obligatorio").not().isEmpty(),
        check("correo", "Este no es un correo valido").isEmail(),
        check("correo").custom(existenteTeacher),
        validarCampos
    ], teacherPost);

module.exports = router
