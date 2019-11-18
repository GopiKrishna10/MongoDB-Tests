const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe Tests
describe('Delete Records', () => {
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
    it('Deletes one record to the Database', (done) => {
        MarioChar.findOneAndRemove({ name: 'Mario' }).then((result) => {
            MarioChar.findOne({name:'Mario'}).then((result) => {
                assert(result === null);
                done();
            })
        })
    });



});