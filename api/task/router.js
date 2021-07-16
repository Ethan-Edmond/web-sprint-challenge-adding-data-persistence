// build your `/api/tasks` router here
const router = require('express').Router();
const {
  validate,
  validateType,
  validateProject
} = require('./middleware');
const Tasks = require('./model');

const formatTask = ({task_completed, ...rest}) => {
  return {
    ...rest,
    task_completed: Boolean(task_completed)
  };
};

router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then(tasks => {
      res.json(
        tasks.map(formatTask)
      );
    })
    .catch(next);
});

router.post('/', validate, validateType, validateProject, (req, res, next) => {
  Tasks.add(req.task)
    .then(newTask => {
      res.json(formatTask(newTask));
    })
    .catch(next);
});

module.exports = router;
