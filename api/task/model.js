// build your `Task` model here
const db = require('../../data/dbConfig');

exports.getAll = () => {
  return db('tasks');
};

exports.add = async (task) => {
  const task_id = await db('tasks').insert(task);
  return await db('tasks').where({task_id});
};

exports.getProj = (project_id) => {
  return db('projects')
    .where({project_id})
    .first();
};
