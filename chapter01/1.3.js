// replacing spaces in between with character

// %20

// if first space replace %20 ....ignore all push 
function ignoreSpace(str)
{
    let arrayOfStr = str.split(" ");
    let finalString = "";
    //console.log(arrayOfStr)

    arrayOfStr.forEach(element => {
        if(element != '')
        {
           if(arrayOfStr[arrayOfStr.length -1] == element){
            finalString += element;
           }else{
           //console.log(element);
           finalString += element + "%20";
           }
        }
    });

    console.log(finalString);
}

// I like engineering and analytics part

ignoreSpace("Test    of Zoo");

// Run time O(n)