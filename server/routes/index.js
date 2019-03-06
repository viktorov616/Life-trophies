const express          = require('express');

const { catchErrors }  = require('../handlers/errorHandlers');

const router = express.Router();

router.get('/api/test', function(req, res) { res.json({ it: 'works' }) })

module.exports = router;
