//variables
const express = require('express');
const router = express.Router();


//Categories route
router.get('/categories', (req, res) => {
    res.send('Categories route');
});


//exports
module.exports = router;
