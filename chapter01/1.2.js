// Given two string decide if one is permutation of the other

// aab
// aba 

function perm(str1, str2){
    if(str1.length != str2.length){
      return false;
    }else{
      str1 = str1.split('').sort().join('');
      str2 = str2.split('').sort().join('');
      
      if (str1 === str2) return true;
    }
    return false;
  }
  
  console.log(perm("abcde", "acbee"));