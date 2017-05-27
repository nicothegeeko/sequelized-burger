# Burger Database -- Sequelize

# Week of 15 Homework Sequelize

	## Link to Heroku: 

	https://good-burger-delux.herokuapp.com/


### Overview of App 

Created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 

### Instructions

Using MySQL a database was created to capture burgers within in the database. You can add burgers to the database using the Add a burger function at the bottom of the page and clicking the "Add Burger" button. Then you can also sort through all of the good burgers located on the left and find what burgers are avaliable to eat. Then click the "Eat it Up" button in order to eat the really good burger. At this point the burger will remain in the right list under "burgers that have been eaten" and you may longer eat the burger. 

After you are done looking at burgers have been enjoyed you can hit the delete button to make way for even more burgers.

### Technologies Used: 

* Heroku 
* Node.js 
* JavaScript
* Bootstrap
* Jquery 
* CSS
* HTML
* Handlebars
* Body Parser 
* Express
* Sequelize



#### Sequelize Implementation  

Rather than building an ORM for this assignment we used sequelize to help create the relationship between the MySQL and the user. 

Below is the sequelize code used for this application. Compared to constructing an ORM, sequelize really simplifies the amount of code needed to execute data entry/updates.

```
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
 burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: false
  
  });

  return burgers;
};

```

- - -


