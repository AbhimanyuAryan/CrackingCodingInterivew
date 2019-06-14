// What is recursion 

// factorial 

function fac(n){
    if(n == 1 || n == 0){
        return 1;
    }else{
        return n * fac(n-1); // ||
    }
}


// 3! = 3 * 2 * 1! 
// 1! = 1
// 0! = 1

// n! = n * (n-1)!

fac(9);