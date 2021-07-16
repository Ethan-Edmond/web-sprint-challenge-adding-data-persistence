// build your `/api/resources` router here
const router = require('express').Router();
const {
  validate,
  validateType,
  validateUniqueName
} = require('./middleware');
const Resources = require('./model');

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then(resources => {
      res.json(resources);
    })
    .catch(next);
});

router.post('/', validate, validateType, validateUniqueName, (req, res, next) => {
  Resources.add(req.resource)
    .then(newResource => {
      res.json(newResource);
    })
    .catch(next);
});

module.exports = router;
