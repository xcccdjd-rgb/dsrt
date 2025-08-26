// Dummy login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "fengbayu@gmail.com" && password === "kakanda") {
        window.location.href = "app.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }

  // Tab switcher in app
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });
});
