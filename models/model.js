const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
})

module.exports = mongoose.model('Data', dataSchema)