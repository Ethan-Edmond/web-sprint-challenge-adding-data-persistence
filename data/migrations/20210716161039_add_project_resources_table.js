
exports.up = function(knex) {
  return knex.schema.createTable('project_resources', tbl => {
    tbl.increments('project_resource_id');
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
    tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_resources');
};
