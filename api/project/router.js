// build your `/api/projects` router here
const router = require('express').Router();
const {
  validate,
  validateType
} = require('./middleware');
const Projects = require('./model');

router.get('/', (req, res, next) => {
  Projects.getAll()
    .then(projects => {
      res.json(projects);
    })
    .catch(next);
});

router.post('/', validate, validateType, (req, res, next) => {
  Projects.add(req.project)
    .then(newProject => {
      res.json(newProject);
    })
    .catch(next);
});

module.exports = router;
