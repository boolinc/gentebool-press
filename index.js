'use strict';

module.exports = (list) => {
    var shuffle = require('knuth-shuffle').knuthShuffle
    shuffle(list);
    return list;
};
