document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
  
    function showRegisterForm() {
      registerForm.style.display = 'block';
      loginForm.style.display = 'none';
    }
  
    function showLoginForm() {
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    }
  
    // Initial setup
    showRegisterForm();
  
    // Event listeners
    registerLink.addEventListener('click', function (e) {
      e.preventDefault();
      showRegisterForm();
    });
  
    loginLink.addEventListener('click', function (e) {
      e.preventDefault();
      showLoginForm();
    });
  });
  