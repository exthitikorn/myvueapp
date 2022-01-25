const mongoose = require('mongoose');

const { Schema } = mongoose;

const sdpSchema = new Schema(
    {
        sdp_Type: {
            type: String,
            required: 'Type cannot be blank'
        },
        sdp_Lat: {
            type: Number,
            required: 'Lat cannot be blank'
        },
        sdp_Lng: {
            type: Number,
            required: 'Lng cannot be blank'
        },
        ofccc_id: {
            type: String,
            required: 'Id cannot be blank'
        }
    },
    { collection: 'sdp' }
)

module.exports = mongoose.model('sdp', sdpSchema)