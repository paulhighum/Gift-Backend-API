exports.up = function(knex, Promise){
  return knex.schema.createTable("ideas", table => {
    table.increments("id").primary()
    table.text("idea")
    table.text("occasion")
    table.text("gender")
    table.integer("min-age")
    table.integer("max-age")
    table.integer("min-relationship-length")
    table.integer("max-relationship-length")
    table.text("relationship-type")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("ideas")
}
