'use strict';

var contacts = require('./contacts.json');

module.exports = {
    all: function () {
        return contacts;
    }
};

