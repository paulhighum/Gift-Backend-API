exports.seed = function(knex, Promise){
  // Deletes ALL existing entries
  return knex("ideas")
    .del()
    .then(function(){
      // Inserts seed entries
      return knex("ideas").insert([
        {
          id: 1,
          idea: "Flowers",
          occasion: "Valentine's Day",
          gender: "Female",
          "minAge": 10,
          "maxAge": 100,
          "minRelationshipLength": 0,
          "maxRelationshipLength": 100,
          "relationshipType": "Any"
        },{
          id: 2,
          idea: "Chocolate",
          occasion: "Valentine's Day",
          gender: "Female",
          "minAge": 10,
          "maxAge": 100,
          "minRelationshipLength": 0,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 3,
          idea: "Chocolate Covered Strawberries",
          occasion: "Valentine's Day",
          gender: "Female",
          "minAge": 12,
          "maxAge": 100,
          "minRelationshipLength": 0,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE ideas_id_seq RESTART WITH 4")
    })
}
