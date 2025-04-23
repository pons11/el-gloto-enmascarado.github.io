const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  horario: String,
});

module.exports = mongoose.model('Restaurante', RestauranteSchema);
