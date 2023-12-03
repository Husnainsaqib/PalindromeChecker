var palindrome = prompt("enter word you want to check")
var flag = true
for(var i = 0; i < (palindrome.length) / 2; i++){
    if(palindrome[i] == palindrome[palindrome.length - (i+1)]){
        continue;
    }else{
        flag = false;
    }
}
if(flag == true){
    console.log("true")
}else{
    console.log("false");
}