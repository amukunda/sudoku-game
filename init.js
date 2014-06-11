(function() {
  var o1 = Object.create(TableObject);
  o1.init();
  $("#new").on( "click", function() {
    o1.shuffle();
    o1.permuter();
    o1.populate();
  });
  $("#check").on( "click", function() {
    o1.checking();
  });
  $("#solve").on( "click", function() {
    o1.solve();
  });
  $("#reset").on( "click", function() {
    o1.reset();
  });
  $('.matrixcell').keyup(function(ev){
    if((ev.which < 49 || ev.which > 57) && ev.which != 8) {
      alert("Please enter a number 1 through 9");
    }	
  });
}());