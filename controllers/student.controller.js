const { response, json } = require('express');
const bcryptjs = require('bcryptjs');
const Student = require('../models/student');

const studentGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, students] = await Promise.all([
        Student.countDocuments(query),
        Student.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        students
    });
}

const getStudentsByid = async (req, res) => {
    const { id } = req.params;
    const student = await Student.findOne({ _id: id });

    res.status(200).json({
        student
    });
}

const studentsPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, correo, role, ...resto } = req.body;

    await Student.findByIdAndUpdate(id, resto);

    const student = await Student.findOne({ _id: id });

    res.status(200).json({
        msg: 'Student actualizado exitosamente',
        student
    });
}

const studentsDelete = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndUpdate(id, { estado: false })
    const student = await Student.findOne({ _id: id });

    res.status(200).json({
        msg: 'Student eliminado exitosamente',
        student
    });
}

const studentPost = async (req, res) => {
    const { nombre, correo, password, asignatura } = req.body;
    const student = new Student({ nombre, correo, password, asignatura });

    const salt = bcryptjs.genSaltSync();
    student.password = bcryptjs.hashSync(password, salt);

    await student.save();
    res.status(200).json({
        student
    });
}

module.exports = {
    studentGet,
    studentPost,
    studentsDelete,
    studentsPut,
    getStudentsByid
}