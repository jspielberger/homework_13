//api-routes

let express = require('express');

let router = express.Router();

let burger = require('../config/orm.js');

router.get('/',function(req,res){
    burger.all(function(data){
        res.render('index', {burgers:data})
    })
})

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.insertOne(req.body.name);
  });

// router.post();

router.put('/api/burgers/:id', function(req,res) {
    burger.eat(req.params.id, function(data){
        res.redirect('/')
    })
});

router.delete('/api/burgers/:id', function(req,res) {
    burger.delete(req.params.id, function(data) {
        res.redirect('/')
    })
})

module.exports = router;
