const mongoose = require('mongoose');
const URI = 'mongodb://anderson1096:root123@ds157702.mlab.com:57702/mern-stack-tasks';

mongoose.connect(URI, { useNewUrlParser: true })
    .then( db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;