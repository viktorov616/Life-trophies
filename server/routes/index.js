const express = require('express');
const categoryController = require('../controllers/CategoryController')
const qualityController = require('../controllers/QualityController')
const statusController = require('../controllers/StatusController')
const userController = require('../controllers/UserController')

const { catchErrors } = require('../handlers/errorHandlers');

const router = express.Router();

router.get('/api/test', function (req, res) { res.json({ it: 'works' }) })

router.post(
  '/api/category',
  catchErrors(categoryController.createCategory),
);

router.post(
  '/api/quality',
  catchErrors(qualityController.createQuality),
);

router.post(
  '/api/status',
  catchErrors(statusController.createStatus),
);

router.post(
  '/api/user',
  catchErrors(userController.createUser),
);

module.exports = router;
