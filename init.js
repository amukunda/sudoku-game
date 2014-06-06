(function() {
  var o1 = Object.create(TableObject);
  o1.init();
  $("#new").on( "click", function() {
    o1.shuffle();
    o1.populate();
  });
  $("#check").on( "click", function() {
    o1.checking();
  });
}());