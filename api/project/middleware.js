exports.validate = (req, res, next) => {
  const {project_name} = req.body;
  if (project_name) {
    next();
  } else {
    next({
      status: 400,
      message: 'project_name is required'
    });
  }
};

exports.validateType = (req, res, next) => {
  const {project_name, project_description, project_completed} = req.body;
  const nameValid = typeof project_name === 'string';
  const descriptionValid = (typeof project_description === 'string') ||
        (project_description === undefined);
  const completedValid = (typeof project_completed === 'boolean') ||
        (project_completed === undefined);
  if (nameValid && descriptionValid && completedValid) {
    req.project = {project_name, project_description, project_completed};
    next();
  } else {
    next({
      status: 400,
      message: 'Incorrect typing: name and descr. should be strings and completed should be a boolean'
    });
  }
};
