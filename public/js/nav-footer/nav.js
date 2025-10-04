    document.addEventListener("DOMContentLoaded", () => {
      const nav = document.getElementById("globalNav");

  fetch("../../nav-footer/nav.html")
        .then(response => response.text())
        .then(data => {
          nav.innerHTML = data;
        })
        .catch(err => console.error("Erro ao carregar navbar:", err));
    });