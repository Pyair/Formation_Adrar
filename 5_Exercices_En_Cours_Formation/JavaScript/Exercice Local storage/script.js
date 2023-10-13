function login() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    
    let storedLogin = localStorage.getItem("login");
    let storedPassword = localStorage.getItem("password");

    if (login === storedLogin && password === storedPassword) {
        
        document.getElementById("user-login").textContent = storedLogin;
        document.getElementById("user-nom").textContent = localStorage.getItem("nom");
        document.getElementById("user-prenom").textContent = localStorage.getItem("prenom");
        document.getElementById("user-age").textContent = localStorage.getItem("age");
        document.getElementById("user-email").textContent = localStorage.getItem("email");
        document.getElementById("user-profession").textContent = localStorage.getItem("profession");

        
        document.getElementById("login-form").style.display = "none";
        
        document.getElementById("user-info").style.display = "block";
    } else {
        alert("Identifiants incorrects. Veuillez réessayer.");
    }
}

function logout() {
    
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    localStorage.removeItem("nom");
    localStorage.removeItem("prenom");
    localStorage.removeItem("age");
    localStorage.removeItem("email");
    localStorage.removeItem("profession");

    document.getElementById("login-form").style.display = "block";
    document.getElementById("user-info").style.display = "none";
}
