'use strict';

(function() {
	var toggler = document.querySelector('.header__toggler');
	var menuLeft = document.querySelector('.header__menu--left');
	var menuRight = document.querySelector('.header__menu--right');

	toggler.classList.remove('nojs');
	menuLeft.classList.remove('nojs');
	menuRight.classList.remove('nojs');

	toggler.addEventListener('click', function() {
		toggler.classList.toggle('closed');
		menuLeft.classList.toggle('closed');
		menuRight.classList.toggle('closed');
	});
}());

(function() {
	var controls = document.querySelectorAll('.testimonials__slider-controls-item');
	var slides = document.querySelectorAll('.testimonials__slide');

	for (var i = 0; i < controls.length; i++) {
		controls[i].addEventListener('click', (function(x) {
			return function() {
				var activeControl = document.querySelector('.testimonials__slider-controls-item--active');
				var activeSlide = document.querySelector('.testimonials__slide--active');
				activeControl.classList.remove('testimonials__slider-controls-item--active');
				this.classList.add('testimonials__slider-controls-item--active');
				activeSlide.classList.remove('testimonials__slide--active');
				slides[x].classList.add('testimonials__slide--active');
			}
		})(i));
	}
}());