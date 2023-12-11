// routes.js (continuación)
// routes.js
const express = require('express');
const router = express.Router();
const Doctor = require('./models/Doctor'); // Asegúrate de tener la ruta correcta
const Paciente = require('./models/Paciente'); // Asegúrate de tener la ruta correcta
const Cita = require('./models/Cita'); // Asegúrate de tener la ruta correcta

router.post('/doctor', async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/paciente', async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/cita', async (req, res) => {
  try {
    const cita = await Cita.create(req.body);
    res.json(cita);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/doctores', async (req, res) => {
  try {
    const doctores = await Doctor.find();
    res.json(doctores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/citas', async (req, res) => {
  try {
    const citas = await Cita.find();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
