var hand_hour = document.getElementById('clock-hand-hour');
var hand_minute = document.getElementById('clock-hand-minute');
var hand_second = document.getElementById('clock-hand-second');

const second_deg_per_second = ( 1 / 60 ) * 360;
const minute_deg_per_minute = ( 1 / 60 ) * 360;
const hour_deg_per_minute = ( 1 / 12 ) * 360 / 60;

var hour_deg = 0;
var minute_deg = 0;
var second_deg = 0;

function initClock() {
	const current_hour = new Date().getHours();
	const current_minute = new Date().getMinutes();
	const current_second = new Date().getSeconds();
	
	second_deg = ( current_second / 60 ) * 360;
	minute_deg = ( current_minute / 60 ) * 360;
	hour_deg = ( current_hour / 12 ) * 360 + ( minute_deg / 12 );
	
	setRotate(hand_second, second_deg);
	setRotate(hand_minute, minute_deg);
	setRotate(hand_hour, hour_deg);
}

function setRotate(hand, deg) {
	hand.style.transform = `rotate( ${deg}deg ) translate( -50%, -90% )`;
}

function setClockSecond() {
	second_deg += second_deg_per_second;
	setRotate(hand_second, second_deg);
}

function setClockMinute() {
	minute_deg += minute_deg_per_minute;
	hour_deg += hour_deg_per_minute;
	setRotate(hand_minute, minute_deg);
	setRotate(hand_hour, hour_deg);
}

initClock();
window.setInterval( setClockSecond, 1000 );
window.setInterval( setClockMinute, 60000 );
