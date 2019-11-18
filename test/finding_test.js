const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe Tests
describe('Finding Records', () => {
    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(() => {
            done();
        })
    })

    // Create Test
    it('Finds a record to the Database', (done) => {
        MarioChar.findOne({ name: 'Mario' }).then((result) => {
            assert(result.name === 'Mario');
            done();
        })
    });

    it('Finds a record by ID from the Database', (done) => {
        MarioChar.findOne({ _id: char._id }).then((result) => {
            assert(result._id.toString() === char._id.toString());
            done();
        })
    });

});