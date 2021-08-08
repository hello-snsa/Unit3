function runProgram(input) {

  var input = input.split("\n");

  for(var t = 1; t<input.length; t++){

  	var [n,m] = input[t].split(" ").map(Number);
 
   	var mat = input.slice(t+1,t+n+1).map(function(row){
    	return row.trim().split(" ").map(Number);
    });

    var obj = {};
    for(var row = 0; row<n;row++){
    	var obj2 = {};
      	for(var col = 0; col<m; col++){
        	if(mat[row][col] in obj2){
            	obj2[mat[row][col]]++
            }
          	else{
            	obj2[mat[row][col]] = 1;
            }
        }
    
      for(key in obj2){
          
      	if(key in obj){
        	obj[key]++
        }
        else{
        	obj[key] = 1;
        }
      }
    }

    var count = 0;
    
    for(key in obj){
    	if(obj[key]==n){
        	count++
        }
    }
    console.log(count)
    t = t + n;
  }

  }//End of runProgram()
    
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = ``;
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });//End of program
  
  
  