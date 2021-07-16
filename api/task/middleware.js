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
  res.json(
    'cutting at validateType'
  );
  // const {resource_name, resource_description} = req.body;
  // const nameValid = typeof resource_name === 'string';
  // const descriptionValid = (typeof resource_description === 'string') ||
  //       (resource_description === undefined);
  // if (nameValid && descriptionValid) {
  //   req.resource = {resource_name, resource_description};
  //   next();
  // } else {
  //   next({
  //     status: 400,
  //     message: 'Incorrect typing: name and descr. should be strings'
  //   });
  // }
};

exports.validateProject = (req, res, next) => {
  
};
