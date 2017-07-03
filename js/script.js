$(document).ready(function(){

  // browser refreshes on submit
  // $('form').on('submit', function(){
  //   var name = $('#name').val(); //value of the thing with id = name
  //   $("#hello").text("Hello, " + name);
  // });

  //examine event object
  $('form').on('submit', function(event){
    var name = $('#name').val();
    $("#hello").text("Hello, " + name);
    event.preventDefault();
  });

  // stop page refresh
  // $('form').on('submit', function(event){
  //   var name = $('#name').val();
  //   $("#hello").text("Hello, " + name);
  //   event.preventDefault();
  // });

});
