'use strict';

var range_border = document.getElementById('range-border');
var range_blur = document.getElementById('range-blur');
var bg_color = document.getElementById('bg-color');
var image = document.getElementById('image');

function print() {
	console.log(range_border.value);
	console.log(range_blur.value);
	console.log(bg_color.value);
}

print();

range_border.addEventListener('change', function (e) {
	var unit = e.target.dataset.unit || '';
	image.style.setProperty('border', 'solid red ' + e.target.value + unit);
});

range_blur.addEventListener('change', function (e) {
	var unit = e.target.dataset.unit || '';
	image.style.filter = 'blur(' + e.target.value + unit + ')';
});

bg_color.addEventListener('change', function (e) {
	document.documentElement.style.setProperty('background-color', e.target.value);
});
//# sourceMappingURL=main.js.map