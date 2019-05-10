import Stickyfill from '../dist/stickyfill';

document.addEventListener('DOMContentLoaded', () => {
	const sticky = document.querySelector('.sticky');
	const overlay = document.querySelector('.overlay');
	const list = document.querySelector('.list');

	Stickyfill.setScrollContainer(overlay);
	Stickyfill.forceSticky();
	Stickyfill.add(sticky);

});
