let myName = document.querySelector("#your-name").value;
let partnerName = document.querySelector("#partner-name").value;
let para = document.querySelector(".res-p");
let resultArea = document.querySelector(".res-num");
let result = Math.floor((Math.random()*100)+1);
console.log(result)

function calculate(){
    // if(myName === null || partnerName === null){
    //     alert("please put your name ")
    // }else{
    if(result >=90){
        para.innerHTML = "Thats Awesome! That Makes a Cute pair.";
    }else if(result<90 && result>=70){
        para.innerHTML = "May Be a Good pair!";
    }else{
        para.innerHTML = "Oops sorry! Not a Great Pair";
    }
    resultArea.innerHTML = result + "%";
}
// }
function refresh(){
    window.location.reload("Refresh")
  }