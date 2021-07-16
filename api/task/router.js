// build your `/api/tasks` router here
const router = require('express').Router();
const {
  validate,
  validateType,
  validateProject
} = require('./middleware');
const Tasks = require('./model');

router.get('/', (req, res, next) => {
  res.json('here it is');
});

router.post('/', validate, validateType, validateProject, (req, res, next) => {
  res.json('posting......... or maybe not');
});

module.exports = router;
