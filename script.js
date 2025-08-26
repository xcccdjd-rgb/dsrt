document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('auth-form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const pass = document.getElementById('password').value;
      if(email === 'fengbayu@gmail.com' && pass === 'kakanda'){
        window.location.href = 'app.html';
      } else {
        alert('Email atau password salah');
      }
    });
  }
  const logout = document.getElementById('logout-btn');
  if(logout){
    logout.addEventListener('click', () => window.location.href = 'index.html');
  }
});
