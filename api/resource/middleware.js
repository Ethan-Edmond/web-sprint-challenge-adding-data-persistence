const Resources = require('./model');

exports.validate = (req, res, next) => {
  const {resource_name} = req.body;
  if (resource_name) {
    next();
  } else {
    next({
      status: 400,
      message: 'resource_name is required'
    });
  }
};

exports.validateType = (req, res, next) => {
  const {resource_name, resource_description} = req.body;
  const nameValid = typeof resource_name === 'string';
  const descriptionValid = (typeof resource_description === 'string') ||
        (resource_description === undefined);
  if (nameValid && descriptionValid) {
    req.resource = {resource_name, resource_description};
    next();
  } else {
    next({
      status: 400,
      message: 'Incorrect typing: name and descr. should be strings'
    });
  }
};

exports.validateUniqueName = async (req, res, next) => {
  const resource_name = req.body.resource_name.trim();
  const resources = await Resources.getAll();
  const names = new Set(resources.map(resource => resource.resource_name));
  if (names.has(resource_name)){
    next({
      status: 400,
      message: `Name ${resource_name} already exists in database`
    });
  } else {
    next();
  }
};
