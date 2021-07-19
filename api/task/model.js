// build your `Task` model here
const db = require('../../data/dbConfig');

exports.getAll = () => {
  // SELECT * from tasks
  // JOIN projects
  //   ON tasks.project_id = projects.project_id
  return db('tasks')
    .select('tasks.*', 'projects.project_name', 'projects.project_description', 'projects.project_id')
    .join('projects', 'tasks.project_id', 'projects.project_id')
  ;
};


exports.add = async (task) => {
  const task_id = await db('tasks').insert(task);
  return await db('tasks')
    .where({task_id})
    .first();
};

exports.getProj = (project_id) => {
  return db('projects')
    .where({project_id})
    .first();
};
