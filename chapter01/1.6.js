// String Compression 

let map = {}

function compression(str){
    arrStr1 = str.split(''); 
    for(let i = 0; i < arrStr1.length; i++){
        if(map[arrStr1[i]] == undefined) {
            map[arrStr1[i]] = 1;
        }else{
            map[arrStr1[i]] += 1;
        }
    }

    let finalStr = ""; 

    Object.keys(map).forEach(ele => {
        finalStr += ele + map[ele];
    })
    
    console.log(finalStr); 
}

compression("aabbbccccc");