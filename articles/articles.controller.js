//variables
const express = require('express');
const router = express.Router();


//Articles route
router.get('/articles', (req, res) => {
    res.send('Articles route');
});


//exports
module.exports = router;
