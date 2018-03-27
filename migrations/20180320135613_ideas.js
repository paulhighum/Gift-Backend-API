exports.up = function(knex, Promise){
  return knex.schema.createTable("ideas", table => {
    table.increments("id").primary()
    table.text("idea")
    table.text("occasion")
    table.text("gender")
    table.integer("minAge")
    table.integer("maxAge")
    table.integer("minRelationshipLength")
    table.integer("maxRelationshipLength")
    table.text("relationshipType")
    table.integer("price")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("ideas")
}
