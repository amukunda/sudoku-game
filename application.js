var TableObject = (function() {
  var t1 = {	
    /**
     *Initialize
     */
  	init: function() { 
  		var mydata = JSON.parse(matrix_3_3);
  		var count  = mydata.count;
  		var index = Math.floor(Math.random()*count);
  		var temp = (""+mydata.input[index]).split("");
  		input = [];
  		for(x=0;x<9;x++){
  			input[x] = [];
    	  for(y=0;y<9;y++){
    	    input[x][y] = temp[9*x+y]; 	// x,y are the co-ordinates for a cell
    	                                // 9*x+y+1 is the position of that cell
    	                                // for eg: cell 1 will have co-ordinates 0,0 
    	  }	
    	}
  		t1.shuffle();
  		t1.populate();
    },
    
    /**
     * Populate the table
     *   This function not only populates the table but also randomly decides whether a cell value should be displayed or hidden
     */
    populate: function() {
    	puzzle = [];
    	for(x=0;x<9;x++){
    	  for(y=0;y<9;y++){
    	  	id = 9*x+y+1;
    	  	if(Math.random() > 0.5) {  // to decide whether value is hidden or displayed
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
     * Reset the table
     */
    reset: function() {
      for(i=0;i<81;i++){
      	value = puzzle[i];
      	id = i+1;
        document.getElementById(""+id+"").value = value == "0" ? "" : value;	
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
    	  	if(document.getElementById(""+id+"").value == "") {
    	  	  flag = false;	
    	  	} else {	
    	  	  if(input[x][y] != document.getElementById(""+id+"").value){
    	        $("#"+id+"").addClass("incorrect");  
    	        flag = false;
    	      } else {
    	    	  $("#"+id+"").removeClass("incorrect");
    	      }
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
    
    /**
     * Solve the puzzle for the user
     */
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
     * 
     * row_or_column indicates whether a row or column will be swapped
     * index indicates which set of rows or columns will be swapped    
     * swap1,swap2,swap3 are randomly selected from the above set of rows and columns to decide the order of swapping 
     * 
     * for eg:
     *  row 0,3,6 will be swapped based on the input given below
     *  the order of swapping is randomly decided viz each row could be swapped with any of the other rows
     *  
     *  123|456|789 <------ row_or_column=1,index=0 (row 0)
     *  234|567|891           |        |
     *  345|678|912           |        |
     *  -----------           |        |
     *  456|789|123 <---------(row 3) |
     *  567|891|234                    |
     *  678|912|345                    |
     *  ------------                   |
     *  789|123|456 <------------------(row 6)  
     *  891|234|567 
     *  912|345|678
     *  
     * 
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
