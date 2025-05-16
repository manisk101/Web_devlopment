    document.addEventListener("DOMContentLoaded",function (){
        const menubtn=document.querySelector('.menu-btn')
        const sidebar=document.querySelector('.sidebar')
        menubtn.addEventListener("click", function(){
            sidebar.classList.add('active');
            menubtn.style.visibility ="hidden";
        })
        const closebtn=document.querySelector('.close-btn')
        closebtn.addEventListener('click',function(){
        sidebar.classList.remove('active')
        menubtn.style.visibility="visible";

    });
});
    document.getElementById("logout").addEventListener("click", function(event) {
event.preventDefault(); // Prevent link default behavior
    // Clear session data (adjust depending on how your app stores login info)
    localStorage.removeItem("token"); // or sessionStorage.removeItem("token")
    sessionStorage.clear(); // optional: clear all session data

    // Redirect to login page
    window.location.href = "login.html"; 
});