# Burger Database

# Week of 14 Homework Node Express Handlebars

	## Link to Heroku: https://good-burger.herokuapp.com/


### Overview of App 

Created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 

### Instructions

Using MySQL a database was created to capture burgers within in the database. You can add burgers to the database using the Add a burger function at the bottom of the page and clicking the "Add Burger" button. Then you can also sort through all of the good burgers located on the left and find what burgers are avaliable to eat. Then click the "Eat it Up" button in order to eat the really good burger. At this point the burger will remain in the right list under "burgers that have been eaten" and you may longer eat the burger. 

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



#### Directory structure 

This was one of the most challanging aspects for me in this application in addition to using Handlebars. 

Below is the config: 

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

- - -


