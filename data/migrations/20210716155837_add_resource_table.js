
exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments('resource_id');
    tbl.string('resource_name')
      .unique()
      .notNullable();
    tbl.string('resource_description');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
