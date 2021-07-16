// build your `/api/tasks` router here
const router = require('express').Router();
const {
  validate,
  validateType,
  validateProject
} = require('./middleware');
const Tasks = require('./model');

router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.post('/', validate, validateType, validateProject, (req, res, next) => {
  Tasks.add(req.task)
    .then(newTask => {
      res.json(newTask);
    })
    .catch(next);
});

module.exports = router;
