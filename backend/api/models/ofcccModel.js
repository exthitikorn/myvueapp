const mongoose = require('mongoose');

const { Schema } = mongoose;

const ofcccSchema = new Schema(
    {
        ofccc_Type: {
            type: String,
            required: 'Type cannot be blank'
        },
        ofccc_Lat: {
            type: Number,
            required: 'Rack cannot be blank'
        },
        ofccc_Lng: {
            type: Number,
            required: 'Rack cannot be blank'
        },
        olt_id: {
            type: String,
            required: 'Id cannot be blank'
        }
    },
    { collection: 'ofccc' }
)

module.exports = mongoose.model('ofccc', ofcccSchema)