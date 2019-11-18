const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe Tests
describe('Saving Records', () => {

// Create Test
it('Saves a record to the Database',(done) => {
    var char = new MarioChar({
        name:'Mario'
    });
    char.save().then(() => {
        assert(char.isNew === false);
        done();
    })
});
    
});