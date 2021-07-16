// build your `/api/resources` router here
const router = require('express').Router();

router.get('/', (req, res, next) => {
  next();
});

router.post('/', (req, res, next) => {
  next();
});

module.exports = router;
