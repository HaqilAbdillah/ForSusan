alert("Ini Janjiku kemarin ya susan")
alert("Terima ya")


function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}
