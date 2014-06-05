var TableObject = (function() {
  var t1 = {	
    /**
     *Initialize
     */
  	init: function() { 
  		var mydata = JSON.parse(matrix_3_3);
  		input = (""+mydata[0].input).split("");
  		t1.populatetable(input);
    },
    
    /**
     * Populate the table
     */
    populatetable: function(){
    	length = input.length;
    	for(i = 0; i<length; i++){
    		if(input[i] != 0) {
    			id= i+1;
      		document.getElementById(""+id+"").value = input[i];
    		}
    	}
    },
    
    getsolution: function(){
    	length = input.length;
    	/*foreach(i=0;i<length;i++){
    		
    	  t1.getrow();
    	  t1.getcolumn();
    	  t1.getsection();
    	}*/
    },
    
  };
  return t1;
 
  
}());
