// Start Full Image Photo =========
function openImage(imgElement) {
  let modal = document.getElementById("imageModal");
  let fullImage = document.getElementById("fullImage");

  fullImage.src = imgElement.src; // نسخ مسار الصورة المكبرة
  modal.style.display = "flex"; // عرض النافذة
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
// Loading Images
document.querySelectorAll("img.lazy-img").forEach(img => {
  img.addEventListener('load', () => {
    img.classList.add("lazy-image-loaded");
  });
});
// Open Card-info-cont
// Card 1
document.getElementById("card1").addEventListener("click", function () {
  document.getElementById("CardInfo1").style.display = "flex";
});
// Colose card 1
document.getElementById("close1").addEventListener("click", function () {
  document.getElementById("CardInfo1").style.display = "none";
});

// Card 2
document.getElementById("card2").addEventListener("click", function () {
  document.getElementById("CardInfo2").style.display = "flex";
});

// Colose Card 2
document.getElementById("close2").addEventListener("click", function () {
  document.getElementById("CardInfo2").style.display = "none";
})
// Card 3
document.getElementById("card3").addEventListener("click", function () {
  document.getElementById("CardInfo3").style.display = "flex";
});

// Colose Card 3
document.getElementById("close3").addEventListener("click", function () {
  document.getElementById("CardInfo3").style.display = "none";
})