// build your `/api/projects` router here
const router = require('express').Router();
const {
  validate,
  validateType
} = require('./middleware');
const Projects = require('./model');

const formatProject = ({project_completed, ...rest}) => {
  return {
    ...rest,
    project_completed: Boolean(project_completed)
  };
};


router.get('/', (req, res, next) => {
  Projects.getAll()
    .then(projects => {
      res.json(
        projects.map(formatProject)
      );
    })
    .catch(next);
});

router.post('/', validate, validateType, (req, res, next) => {
  Projects.add(req.project)
    .then(newProject => {
      res.json(formatProject(newProject));
    })
    .catch(next);
});

module.exports = router;
