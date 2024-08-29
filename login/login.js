function loginData (e){
e.preventDefault();
let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;

let localName = localStorage.getItem("email");
let localPassword = localStorage.getItem("password");

if (userEmail === localName && userPassword === localPassword ) {
    alert("Data is Correct");
    window.location.href = "../cvv.html"
}
else{
    alert("Data Not Found");
}


}