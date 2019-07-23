console.log('hello');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/worldOfLiterature', { useNewUrlParser: true });

module.exports = {
	Authors: require('./Authors'),
	User: require('./Users'),
	Books: require('./Books')
};