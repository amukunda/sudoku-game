(function() {
  var o1 = Object.create(TableObject);
  o1.init();
  $("#new").on( "click", function() {
  	console.log('inclick');
    o1.shuffle();
    o1.populate();
  });
}());