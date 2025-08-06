
document.addEventListener("DOMContentLoaded", function () {
  const btnConteudo = document.getElementById("btn-conteudo");
  const dropdownMenu = document.getElementById("dropdown-menu");

  btnConteudo.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

 
  document.addEventListener("click", function (e) {
    if (
      !dropdownMenu.contains(e.target) &&
      !btnConteudo.contains(e.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
