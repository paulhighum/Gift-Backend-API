exports.up = function(knex, Promise){
  return knex.schema.createTable("ideas", table => {
    table.increments("id").primary()
    table.text("idea")
    table.integer("min-age")
    table.integer("max-age")
    table.integer("relationship-length")
    table.text("gender")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("ideas")
}
