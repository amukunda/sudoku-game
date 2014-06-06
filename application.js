var TableObject = (function() {
  var t1 = {	
    /**
     *Initialize
     */
  	init: function() { 
  		var mydata = JSON.parse(matrix_3_3);
  		var temp = (""+mydata[0].input).split("");
  		input = [];
  		for(x=0;x<9;x++){
  			input[x] = [];
    	  for(y=0;y<9;y++){
    	    input[x][y] = temp[9*x+y]; 	
    	  }	
    	}
  		t1.shuffle();
  		t1.populate();
    },
    
    /**
     * Populate the table
     */
    populate: function() {
    	puzzle = [];
    	for(x=0;x<9;x++){
    	  for(y=0;y<9;y++){
    	  	id = 9*x+y+1;
    	  	if(Math.random() > 0.5) {
      			id= 9*x+y+1;
        		document.getElementById(""+id+"").value = input[x][y];
        		puzzle[9*x+y] = input[x][y]
      		} else{
      			document.getElementById(""+id+"").value = "";
      			puzzle[9*x+y] = "0";
      		}
    	  	$("#"+id+"").removeClass("incorrect");
    	  }	
    	}
    },
    
    /**
     * Check whether the data is correct
     */
    checking: function() {
    	flag = true;
    	for(x=0;x<9;x++){
    	  for(y=0;y<9;y++){
    	  	id = 9*x+y+1;
    	  	flag = document.getElementById(""+id+"").value == "" ? false : true;
    	    if(input[x][y] != document.getElementById(""+id+"").value){
    	      $("#"+id+"").addClass("incorrect");  
    	      flag = false;
    	    } else {
    	    	$("#"+id+"").removeClass("incorrect");
    	    }
    	  }
    	}
    	if(flag){
    	  if(confirm("Woohoo .... Try Another One")){
    	    t1.shuffle();
          t1.populate();
    	  }	
    	}
    },
    
    solve: function() {
    	for(x=0;x<9;x++){
    	  for(y=0;y<9;y++){
    	  	id = 9*x+y+1;
    	  	document.getElementById(""+id+"").value = input[x][y];	
    	  }
    	}  
    },
    
    /**
     * Shuffle the input for each new puzzle
     */
    shuffle: function() {
      row_or_column = Math.ceil(Math.random()*2);  // 1 - row , 2 - column
      index        = Math.floor(Math.random()*3);  // 0-first,1-middle,2-last : indicates the row/column to swap
      
      /* the following code randomizes the swap process*/
      swap_1        =  index + Math.floor(Math.random()*3)*3;
      do {
      	swap_2      =  index + Math.floor(Math.random()*3)*3;
      }while(swap_2 == swap_1);
      count = 0;
      do{
        swap_3 = 	index + count*3;
        count ++;
      }while(swap_3 == swap_2 || swap_3 == swap_1);
      
      /*The actual swap process*/
      if(row_or_column == 1){
        for(i=0;i<9;i++){
          temp = input[swap_1][i];
          input[swap_1][i] = input[swap_2][i];
          input[swap_2][i] = input[swap_3][i];
          input[swap_3][i] = temp;
        }
      } else {
      	for(i=0;i<9;i++){
          temp = input[i][swap_1];
          input[i][swap_1] = input[i][swap_2];
          input[i][swap_2] = input[i][swap_3];
          input[i][swap_3] = temp;
        }	
      }
      
    },
    
  };
  return t1;
 
  
}());
