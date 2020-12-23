const { Schema, mongo } = require('mongoose');

const tallySchema = new Schema({
    imagePath: Schema.Types.Mixed,
})

exports.tallySchema = tallySchema;
