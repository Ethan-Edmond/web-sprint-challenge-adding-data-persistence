const {getProj} = require('./model');

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
      message: 'Incorrect typing: descr. and notes should be strings, project_id should be a number and completed should be a boolean'
    });
  }
};

exports.validateProject = (req, res, next) => {
  res.json(
    'cutting at validateProject'
  );
};
