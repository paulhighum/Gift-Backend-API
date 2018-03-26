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
        },{
          id: 4,
          idea: "Sporting Event Tickets",
          occasion: "Any",
          gender: "Male",
          "minAge": 8,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 5,
          idea: "Action Figures",
          occasion: "Any",
          gender: "Male",
          "minAge": 2,
          "maxAge": 100,
          "minRelationshipLength": 0,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 6,
          idea: "Concert Tickets",
          occasion: "Any",
          gender: "Any",
          "minAge": 8,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 7,
          idea: "Brunch On You",
          occasion: "Mother's Day",
          gender: "Any",
          "minAge": 20,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 8,
          idea: "Flowers",
          occasion: "Graduation",
          gender: "Any",
          "minAge": 12,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 9,
          idea: "Gift Card To Favorite Eatery",
          occasion: "Graduation",
          gender: "Any",
          "minAge": 14,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 10,
          idea: "Bunny Themed Candy",
          occasion: "Easter",
          gender: "Any",
          "minAge": 2,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 11,
          idea: "Theater Tickets",
          occasion: "Any",
          gender: "Any",
          "minAge": 1,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Son"
        },{
          id: 12,
          idea: "Theater Tickets",
          occasion: "Any",
          gender: "Any",
          "minAge": 1,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Daughter"
        },{
          id: 13,
          idea: "Theater Tickets",
          occasion: "Any",
          gender: "Any",
          "minAge": 16,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 14,
          idea: "Jewelry",
          occasion: "Any",
          gender: "Female",
          "minAge": 14,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Romantic"
        },{
          id: 15,
          idea: "Jewelry",
          occasion: "Any",
          gender: "Female",
          "minAge": 14,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Girlfriend"
        },{
          id: 16,
          idea: "Flowers",
          occasion: "Mother's Day",
          gender: "Any",
          "minAge": 20,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        },{
          id: 17,
          idea: "Chocolates",
          occasion: "Mother's Day",
          gender: "Any",
          "minAge": 20,
          "maxAge": 100,
          "minRelationshipLength": 1,
          "maxRelationshipLength": 50,
          "relationshipType": "Any"
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE ideas_id_seq RESTART WITH 4")
    })
}
