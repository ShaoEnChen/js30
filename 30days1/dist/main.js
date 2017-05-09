'use strict';

// const btns = document.querySelectorAll('.btn');
//
// btns.forEach(btn => {
// 	btn.addEventListener('keyup', e => {
// 		console.log("bye");
// 		e.target.classList.remove('playing');
// 	});
// });

function playAudio(e) {
	var audio = document.querySelector('audio[data-key = "' + e.keyCode + '"]');
	if (!audio) return;
	// Add playing css
	var key = document.querySelector('div[data-key = "' + e.keyCode + '"]');
	key.classList.add('playing');

	// Play audio
	audio.currentTime = 0;
	audio.play();
	// console.log(`audio[data-key = "${e.keyCode}"]`);
}

function playEnd(e) {
	var key = document.querySelector('div[data-key = "' + e.keyCode + '"]');
	if (!key) return;
	key.classList.remove('playing');
}

window.addEventListener('keydown', playAudio);
window.addEventListener('keyup', playEnd);
//# sourceMappingURL=main.js.map