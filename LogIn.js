import {username,email,password} from './Register.js'
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
  
    if (uname === username || email && pass === password) {
      // Successful login logic, e.g., redirect to a dashboard page
      alert("Login successful!");
    } else {
      document.getElementById("error-message").textContent = "Invalid username or password";
    }
  });