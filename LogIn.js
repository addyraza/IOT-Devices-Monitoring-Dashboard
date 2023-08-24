document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "Addy" && password === "addy@321") {
      // Successful login logic, e.g., redirect to a dashboard page
      alert("Login successful!");
    } else {
      document.getElementById("error-message").textContent = "Invalid username or password";
    }
  });