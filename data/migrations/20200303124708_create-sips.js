
exports.up = function(knex) {
  return knex.schema.createTable('sip_events', table => {
    table.uuid('id')
    table.string('type')
    table.timestamp('created_at')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sip_events')
};
