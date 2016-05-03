const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true
    },
	  name: String,
    imgUrl: String,
    tags: String
});

const objectSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true
    },
    name: String,
    imgUrl: String,
    desc: String,
    tags: Array
});

const tagSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        unique: true
    },
   name: String
});

const theme =  mongoose.model('Theme', themeSchema);
const object = mongoose.model('Object', objectSchema);
const tag = mongoose.model('Tag', tagSchema);


module.exports = {
    theme: theme,
    object: object,
    tag: tag
};
