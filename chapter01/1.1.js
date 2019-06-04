// Implement an algorithm to determine if string has all unique characters
// What if you can't use additional datastructure? 

// either use hash or array 

function unique(str){
    // n ^ 2
     
     for(var i=0; i < str.length; i++){
       for(var j=i+1; j < str.length; j++) {
         console.log(str[i], '  ', str[j])
        if(str[i] == str[j]){
          return false;
        }
       }
     }
   }
   
console.log(unique("aeao"));



// space complexity 0(n)
// time complexity O(1) 
var map = {};

function pushMap(str){
  for(var i = 0; i < str.length; i++){
    if(map[str[i]] == undefined){
      map[str[i]] = 1;     
    }else{
      console.log("Duplicate Found");
    }
  }
}

pushMap("abcdefgh");