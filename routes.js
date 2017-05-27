module.exports = function(app){
  // Our model controllers (rather than routes)
  var burgers_controller = require('./controllers/burgers_controller');

  app.use('/', burgers_controller);
  app.use('/update', burgers_controller);
app.use('/create', burgers_controller);
app.use('/delete', burgers_controller);

}