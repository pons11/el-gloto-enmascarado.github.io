const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  categoria: String,
  imagen: String,
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
