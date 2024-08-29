function dataSubmit(event){
event.preventDefault();

let userName = document.getElementById("username").value;
let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirm-password").value;

if (userName === "" || userEmail === "" || userPassword === "" || confirmPassword === "") {
    alert("Please fill in all the fields.");
} else {
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "./login.html";

}

}