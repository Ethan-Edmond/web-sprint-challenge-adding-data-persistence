// build your `Project` model here
const db = require('../../data/dbConfig');

const getAll = () => {
  return db('projects');
};

const add = async (project) => {
  const project_id = await db('projects').insert(project);
  return await db('projects').where({project_id});
};

module.exports = {
  getAll,
  add
};
