var myUserData = JSON.parse(localStorage.getItem("userCreds")) || [];

document.querySelector("#form2").addEventListener("submit",myLogin)

function myLogin(){
    event.preventDefault();

   var contact = document.querySelector("#phone").value;
   var code = document.querySelector("#verCode").value;

   for(var i=0;i<myUserData.length;i++){
       if(myUserData[i].contact === contact){
           if(myUserData[i].password === code){
               alert("Login Successful");
               break;
           }
           else{
               alert("Login Failed!");
           }
       }
   }
}
document.querySelector("#form2").addEventListener("submit",loginbygmail)
function loginbygmail(){
    var contact = document.querySelector("#passphone").value;
    var code = document.querySelector("#passPassword").value;
 
    for(var i=0;i<myUserData.length;i++){
        if(myUserData[i].contact === contact){
            if(myUserData[i].password === code){
                alert("Login Successful");
                window.location.href="index.html"
                break;
            }
            else{
                alert("Login Failed!");
            }
        }
    }
}

document.getElementById("scanButton").addEventListener("click",myFunction)

     function myFunction() {
    var x = document.getElementById("detailsdiv1");
    var y = document.getElementById("detailsdiv2");
        console.log("working !");
    if(x.style.display === "block"){
        x.style.display = "none";
        y.style.display = "block";
        document.getElementById("scanButton").innerHTML = "Sign In";

        
    }
    else if(y.style.display === "block"){
        y.style.display = "none";
        x.style.display = "block";
        document.getElementById("scanButton").innerHTML = "Sign In";

    }
}

document.getElementById("js2").addEventListener("click",myForgotPassword)

     function myForgotPassword() {
    var signInA = document.getElementById("inputCreds");
    var signInB = document.getElementById("passinputCreds");
        console.log(signInA,signInB);
    if(signInB.style.display === "none"||signInB.style.display==""){
        signInA.style.display = "none";
        signInB.style.display = "block";
        document.getElementById("js2").innerHTML = "Sign In";

        
    }
    // else if(y.style.display === "block"){
    //     signInB.style.display = "none";
    //     signInA.style.display = "block";
    //     document.getElementById("js2").innerHTML = "Sign In";

    // }
}

document.getElementById("verbutton").addEventListener("click",myVerificationPassword)

     function myVerificationPassword() {
         console.log("working")
    var A = document.getElementById("inputCreds");
    var B = document.getElementById("passinputCreds");
        console.log("working !");
    if(B.style.display === "block"||B.style.display=="none"){
        B.style.display = "none";
        A.style.display = "block";
        
        document.getElementById("js2").innerHTML = "Sign In";    
    }
    // else if(y.style.display === "block"){
    //     B.style.display = "none";
    //     A.style.display = "block";
    //     document.getElementById("js2").innerHTML = "Sign In";

    // }
}