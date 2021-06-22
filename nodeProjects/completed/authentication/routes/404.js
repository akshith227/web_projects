const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
    res.send('404 mate');
});

module.exports = router;
