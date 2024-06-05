const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string'
    }
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true
    }
});

const category = new mongoose.model("category", categorySchema);

module.exports = category;