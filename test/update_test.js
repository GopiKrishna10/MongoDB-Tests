const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe Tests
describe('Updating Records', () => {
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
    it('updates one record to the Database', (done) => {
        MarioChar.findOneAndUpdate({ name: 'Mario' },{name:'Lungi'}).then(() => {
            MarioChar.findOne({_id:char._id}).then((result) => {
                assert(result.name === 'Lungi');
                done();
            })
        })
    });

    // it('Increments the weight by 1',(done) => {
    //     MarioChar.updateOne({},{$inc:{weight:1}}).then(() => {
    //         MarioChar.findOne({name:'Mario'}).then((record) => {
    //             assert(record.weight === 51);
    //             done();
    //         })
    //     })
    // })

});