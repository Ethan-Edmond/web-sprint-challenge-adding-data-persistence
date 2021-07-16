const Tasks = require('./model');

exports.validate = (req, res, next) => {
  const {task_description, project_id} = req.body;
  if (task_description && project_id) {
    next();
  } else {
    next({
      status: 400,
      message: 'task_description and project_id are required'
    });
  }
};

exports.validateType = (req, res, next) => {
  const {task_description, task_notes, task_completed, project_id} = req.body;

  const descriptionValid = typeof task_description === 'string';
  const project_idValid = typeof project_id === 'number';

  const notesValid = (typeof task_notes === 'string') ||
        (task_notes === undefined);
  const completedValid = (typeof task_completed === 'boolean') ||
        (task_completed === undefined);

  if (descriptionValid && project_idValid && notesValid && completedValid) {
    req.task = {task_description, task_notes, task_completed, project_id};
    next();
  } else {
    next({
      status: 400,
      message: 'Incorrect typing: descr. and notes should be strings, ' +
        'project_id should be a number and completed should be a boolean'
    });
  }
};

exports.validateProject = async (req, res, next) => {
  const project = await Tasks.getProj(req.task.project_id);
  const project_idValid = !!project;
  if (project_idValid) {
    next();
  } else {
    next({
      status: 404,
      message: `Project with id ${req.task.project_id} does not exist`
    });
  }
};
