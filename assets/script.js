const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* Ajout des flèches de navigation dans le carroussel et gestion du clic */
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");


/* Ajout des bullet points dans le carroussel*/
const dotsContainer = document.querySelector(".dots");

slides.forEach((slide, index) => {
	const dot = document.createElement("div");
	dot.classList.add("dot");

	if (index === 0) {
		dot.classList.add("dot_selected");
	}

	dotsContainer.appendChild(dot);
});

/*Mise à jour images, textes et bullets*/

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateBanner() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  dots.forEach((dot) => dot.classList.remove("dot_selected"));
  dots[currentIndex].classList.add("dot_selected");
}

updateBanner();

leftArrow.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  updateBanner();
});

rightArrow.addEventListener("click", () => {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateBanner();
});
