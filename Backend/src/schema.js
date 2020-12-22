const { Schema, mongo } = require('mongoose');

const tallySchema = new Schema({
    imagePath: Schema.Types.String,
    imgID: Schema.Types.String,
})

exports.tallySchema = tallySchema;
