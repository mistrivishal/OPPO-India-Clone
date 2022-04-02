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
    var signInA = document.getElementById("detailsdiv1");
    var signInB = document.getElementById("passdetailsdiv2");
        console.log("working !");
    if(signInA.style.display === "block"){
        signInA.style.display = "none";
        signInB.style.display = "block";
        document.getElementById("js2").innerHTML = "Sign In";

        
    }
    else if(y.style.display === "block"){
        signInB.style.display = "none";
        signInA.style.display = "block";
        document.getElementById("js2").innerHTML = "Sign In";

    }
}

document.getElementById("verbutton").addEventListener("click",myVerificationPassword)

     function myVerificationPassword() {
    var signInA = document.getElementById("detailsdiv1");
    var signInB = document.getElementById("passdetailsdiv2");
        console.log("working !");
    if(signInA.style.display === "block"){
        signInA.style.display = "none";
        signInB.style.display = "block";
        document.getElementById("js2").innerHTML = "Sign In";

        
    }
    else if(y.style.display === "block"){
        signInB.style.display = "none";
        signInA.style.display = "block";
        document.getElementById("js2").innerHTML = "Sign In";

    }
}