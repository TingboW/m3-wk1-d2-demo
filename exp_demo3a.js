var express = require('express');
var router = express.Router();

router.get('/home', function(req, res){
    res.sent("Hello World!");
});
router.get('home', function(req, res){
    res.send("You just call the post method at '/hello'!\n");
});

//export this router to use in exp-demo3b.js
module.exports = router;

