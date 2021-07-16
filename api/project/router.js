// build your `/api/projects` router here
const router = require('express').Router();
const Projects = require('./model');

router.get('/', (req, res, next) => {
  Projects.getAll()
    .then(projects => {
      res.json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Projects.add(req.body)
    .then(newProject => {
      res.json(newProject);
    })
    .catch(next);
});

module.exports = router;
