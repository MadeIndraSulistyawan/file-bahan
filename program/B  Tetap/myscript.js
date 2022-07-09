
//Form Login
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="admin" && password=="admin") {window.location = "Home.html"; }
else 
if (done==0) {alert("Invalid login!"); }
}
