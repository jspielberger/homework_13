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
    insertOne: function(name){
        connection.query(`INSERT INTO burgers (burger_name) VALUES ('${name}')`, function(err, data) {
            if (err) throw err;
            console.log("inserted " + data)

        })   
    },
    eat: function(id, cb){
        connection.query('UPDATE burgers SET devoured = 1 WHERE id =?', id, function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
    delete: function(id, cb) {
        connection.query("DELETE FROM burgers WHERE id =?", id, function(err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        }); 
    }

}

module.exports = orm;
