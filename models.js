// models.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  especialidad: String,
  consultorio: String,
  correo: String,
});

const pacienteSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  apellido: String,
  edad: Number,
  telefono: String,
});

const citaSchema = new mongoose.Schema({
  numeroDocumentoPaciente: String,
  especialidad: String,
});

const Doctor = mongoose.model('Doctor', doctorSchema);
const Paciente = mongoose.model('Paciente', pacienteSchema);
const Cita = mongoose.model('Cita', citaSchema);

module.exports = { Doctor, Paciente, Cita };
