var connection = require("./connection.js");

var orm = {
    all: function(cb){
        connection.query('SELECT * FROM burgers', function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    insertOne: function(){
        
    },
    eat: function(id, cb){
        connection.query('UPDATE burgers SET devoured = 1 WHERE id =?', id, function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });

    }

}

module.exports = orm;
