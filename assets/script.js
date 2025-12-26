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

let currentIndex = 0;

let leftArrow = null;
let rightArrow = null;
let dotsContainer = null;
let bannerImg = null;
let bannerText = null;
let dots = [];

/*Init DOM  */
const initDOM = () => {
	if (!banner) {
		throw new Error("Élément #banner introuvable.");
	}

	// Flèches (doivent déjà exister selon ton HTML)
	leftArrow = banner.querySelector(".arrow_left");
	rightArrow = banner.querySelector(".arrow_right");
	if (!leftArrow || !rightArrow) {
		throw new Error("Flèches .arrow_left / .arrow_right introuvables.");
	}

	// <p> pour la tagline
	bannerText = banner.querySelector("p");
	if (!bannerText) {
		bannerText = document.createElement("p");
		banner.prepend(bannerText);
	}

	// Conteneur .dots
	dotsContainer = banner.querySelector(".dots");
	if (!dotsContainer) {
		dotsContainer = document.createElement("div");
		dotsContainer.classList.add("dots");
		banner.appendChild(dotsContainer);
	}

	// Image du banner (
	bannerImg = banner.querySelector(".banner-img");

	if (!bannerImg) {
		bannerImg = document.createElement("img");
		bannerImg.classList.add("banner-img");
		bannerImg.alt = "";

		banner.insertBefore(bannerImg, leftArrow);
	}

};

/*Dots*/
const createDots = () => {
	dotsContainer.innerHTML = "";

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
const goPrev = () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateBanner();
};

const goNext = () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateBanner();
};

const bindEvents = () => {
	leftArrow.addEventListener("click", goPrev);
	rightArrow.addEventListener("click", goNext);
};

/* Boot */
const init = () => {
	initDOM();
	createDots();
	bindEvents();
	updateBanner(); 
};

document.addEventListener("DOMContentLoaded", init);
