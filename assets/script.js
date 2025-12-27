"use strict";

const slides = [
	{
		image: "slide1.jpg",
		tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
	},
	{
		image: "slide2.jpg",
		tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
	},
	{
		image: "slide3.jpg",
		tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
	},
	{
		image: "slide4.png",
		tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
	},
];

const banner = document.querySelector("#banner");
const leftArrow = banner.querySelector(".arrow_left");
const rightArrow = banner.querySelector(".arrow_right");
const bannerText = banner.querySelector("p");
const dotsContainer = banner.querySelector(".dots");
const bannerImg = banner.querySelector(".banner-img")

console.log(dotsContainer);

let currentIndex = 0;

//let dotsContainer = null;
let dots = [];

/*Dots*/
const createDots = () => {
	//dotsContainer.innerHTML = "";

	slides.forEach((_, index) => {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (index === currentIndex) dot.classList.add("dot_selected");

		dot.addEventListener("click", () => {
			currentIndex = index;
			updateBanner();
		});

		dotsContainer.appendChild(dot);
	});

	dots = Array.from(dotsContainer.querySelectorAll(".dot"));
	//const dots = dotsContainer.querySelectorAll(".dot");
};

/* Mise à jour UI */
const updateBanner = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerText.innerHTML = slides[currentIndex].tagLine;

	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentIndex);
	});
};

/*Navigation */

leftArrow.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner();
});
rightArrow.addEventListener("click", () =>{
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner();
});

/* Boot */
const init = () => {
	createDots();	
	updateBanner();
};
init();
