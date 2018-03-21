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
          "min-age": 10,
          "max-age": 100,
          "min-relationship-length": 0,
          "max-relationship-length": 100,
          gender: "Female"
        },{
          id: 2,
          idea: "Chocolate",
          occasion: "Valentines Day",
          "min-age": 10,
          "max-age": 100,
          "min-relationship-length": 0,
          "max-relationship-length": 50,
          gender: "Female"
        },{
          id: 3,
          idea: "Chocolate Covered Strawberries",
          occasion: "Valentines Day",
          "min-age": 12,
          "max-age": 100,
          "min-relationship-length": 0,
          "max-relationship-length": 50,
          gender: "Female"
        },
      ])
    })
}
