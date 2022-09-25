const mongoose = require('mongoose');
const CostSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sum: {
            type: String,
            required: true
    },
    userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
 })
 module.exports = mongoose.model('Cost', CostSchema);
