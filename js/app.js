function showSection(id) {
  document.querySelectorAll(".page").forEach(sec => {
    sec.classList.add("d-none");
  });
  document.getElementById(id).classList.remove("d-none");

  if (id === "dashboard") chargerKPI();
}
