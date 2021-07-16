const db = require('../../data/dbConfig');

exports.getAll = () => {
  return db('resources');
};

exports.add = async (resource) => {
  const resource_id = await db('resources').insert(resource);
  return await db('resources').where({resource_id}).first();
};
