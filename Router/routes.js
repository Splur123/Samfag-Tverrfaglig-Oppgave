const express = require('express');
const router = express.Router();
const {renderindex} = require('../controller/controller');

/*
router.get('/', (req, res, next)=>{
    res.render('index')
});
*/

router.get('/index', renderindex);

module.exports = router;