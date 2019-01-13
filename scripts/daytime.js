hourCodes = ["#003399", "#0040a5", "#004cb1", "#0059bd", "#0066cc", "#0075d2",
	"#0084da", "#0093e2", "#00a2ea", "#00b1f2", "#00c0fa", "#00ccff",
	"#00e1ff", "#00ccff", "#00c0fa", "#00b1f2", "#00a2ea", "#0093e2",
	"#0084da", "#0075d2", "#0066cc", "#0059bd", "#004cb1", "#0040a5" ];

url_day = "url('css/bg_day.png'), url('css/fg_day.png')";
url_night = "url('css/bg_night.png'), url('css/fg_night.png')";

count = 0;

/* Function starts loop, then calls update() to cycle through each BG color. */
function loop() {
	count = new Date().getHours();
	document.body.style.backgroundImage = ((count > 3 && count < 21) ? url_day : url_night);
	document.body.style.backgroundPosition = "top, bottom";
	document.body.style.backgroundRepeat = "no-repeat, no-repeat";
	document.body.style.backgroundSize = "contain, contain";
	document.body.style.backgroundColor = hourCodes[count];
	setInterval(update, 1.5 * 1000);
	count++;
}

/* Function called repeatedly to transition to next color. */
function update() {
	document.body.style.backgroundImage = ((count > 3 && count < 21) ? url_day : url_night);
	document.body.style.backgroundPosition = "top, bottom";
	document.body.style.backgroundRepeat = "no-repeat, no-repeat";
	document.body.style.backgroundSize = "contain, contain";
	document.body.style.backgroundColor = hourCodes[count];
	count = (count + 1) % 24;
}