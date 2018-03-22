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
          occasion: "Valentines Day",
          gender: "Female",
          "min-age": 10,
          "max-age": 100,
          "min-relationship-length": 0,
          "max-relationship-length": 100,
          "relationship-type": "Any"
        },{
          id: 2,
          idea: "Chocolate",
          occasion: "Valentines Day",
          gender: "Female",
          "min-age": 10,
          "max-age": 100,
          "min-relationship-length": 0,
          "max-relationship-length": 50,
          "relationship-type": "Any"
        },{
          id: 3,
          idea: "Chocolate Covered Strawberries",
          occasion: "Valentines Day",
          gender: "Female",
          "min-age": 12,
          "max-age": 100,
          "min-relationship-length": 0,
          "max-relationship-length": 50,
          "relationship-type": "Any"
        },
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE ideas_id_seq RESTART WITH 4")
    })
}
