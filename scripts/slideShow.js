// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("div-img");
//   console.log(slides);
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   console.log(slides[0]);
//   slides[slideIndex - 1].style.display = "block";
// }
// prevLink.addEventListener("click", () => {
//   plusSlides(-1);
// });
// nextLink.addEventListener("click", () => {
//   plusSlides(1);
// });
