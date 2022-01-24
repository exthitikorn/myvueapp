const mongoose = require('mongoose');

const { Schema } = mongoose;

const oltSchema = new Schema(
    {
        olt_Name: {
            type: String,
            required: 'Name cannot be blank'
        },
        olt_Rack: {
            type: String,
            required: 'Rack cannot be blank'
        },
        olt_Shelf: {
            type: String,
            required: 'Rack cannot be blank'
        },
        olt_Slot: {
            type: String,
            required: 'Rack cannot be blank'
        },
        olt_Port: {
            type: String,
            required: 'Rack cannot be blank'
        },
    },
    { collection: 'olt' }
)

module.exports = mongoose.model('olt', oltSchema)