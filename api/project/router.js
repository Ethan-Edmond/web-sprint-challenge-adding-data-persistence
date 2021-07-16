// build your `/api/projects` router here
const router = require('express').Router();
const Projects = require('./model');

console.log('Projects:', Projects);
router.get('/', (req, res, next) => {
  res.json({message: 'wired'});
});

router.post('/', (req, res, next) => {
  next();
});

module.exports = router;
