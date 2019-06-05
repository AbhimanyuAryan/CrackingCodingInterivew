// Triple steps: A child running up a staircase with n steps can either hop 1 steps,
// 2 steps, 3 steps. Implement a method to count number of possible ways the child 
// can run up the strairs 

function magicIndex(totalStairs){
    // 1 step 2 step 3 step
    if(totalStairs == 0 || totalStairs == 1){
      return 1
    }else if(totalStairs == 2){
      return 2
    }
    else{
      return magicIndex(totalStairs-1) + magicIndex(totalStairs-2) + magicIndex(totalStairs-3)
    }
  }
  
  console.log(magicIndex(7))