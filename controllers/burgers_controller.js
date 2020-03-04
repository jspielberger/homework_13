//api-routes

let express = require('express');

let router = express.Router();

let burger = require('../config/orm.js');

router.get('/',function(req,res){
    burger.all(function(data){
        res.render('index', {burgers:data})
    })
})

// router.post();

router.put('/api/burgers/:id');

module.exports = router;
