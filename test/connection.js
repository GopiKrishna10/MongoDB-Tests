const mongoose = require('mongoose');

// connect to the DB before tests runs
before((done) => {
    // Connect to  MongoDB
    mongoose.connect('mongodb://localhost:27017/mongoTests',{ useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true });
    
    mongoose.connection.once('open',() => {
        console.log('Connection has been made');
        done();
    }).on('error',(error) => {
        console.log('Connection Error',error);
    });
});

// Drop the characters collection before each test
beforeEach((done) => {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
        done();
    });
})