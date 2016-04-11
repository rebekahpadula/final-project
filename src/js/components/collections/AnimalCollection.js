// animal collection

// API Key
// 20913d220b9b41cf17da56bb378048ad

// API Secret
// 2c124a58ebd21ff3f7bf3f537cf084e5

var Backbone = require('backbone');
// var petfinder = require('petfinder');
// var AvailableAnimalModel = require('../dashboard/AvailableAnimalModel');

var AnimalCollection = Backbone.Collection.extend({
    // model: AvailableAnimalModel,
    url: function () {
        return 'http://api.petfinder.com/pet.find?key=20913d220b9b41cf17da56bb378048ad&location=29033&format=json';
    },

    parse: function (response) {
        return response.data.results;
    }
});

console.log(AnimalCollection);

module.exports = new AnimalCollection();

// var AnimalCollection = Backbone.Collection.extend({
//     initialize: function (models, options) {
//         this.shelterId = options.shelterId;
//     },

//     url: function () {
//         if (this.shelterId) {
//             return '/shelters/' + this.shelterId + '/animals';
//         } else {
//             return '/animals';
//         }
//     }
// });

// var ac = new AnimalCollection({ shelterId: 2 });

// ac.fetch(); // GET /shelters/2/animals

// ac.create({
//     name: 'Buddy',
//     age: 3,
//     breed: 'Rottweiler'
// }); // POST /shelters/2/animals

// create endpoints on server