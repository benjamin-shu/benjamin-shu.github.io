hourCodes = ["#003399", "#0040a5", "#004cb1", "#0059bd", "#0066cc", "#0075d2",
	"#0084da", "#0093e2", "#00a2ea", "#00b1f2", "#00c0fa", "#00ccff",
	"#00e1ff", "#00ccff", "#00c0fa", "#00b1f2", "#00a2ea", "#0093e2",
	"#0084da", "#0075d2", "#0066cc", "#0059bd", "#004cb1", "#0040a5" ];

url_day = "url('css/bg_day.png')";
url_night = "url('css/bg_night.png')";
connect = " no-repeat cover ";

count = 0;

/* When page loads, start by waiting until next hour. */
/* (i.e. if page loads at 7:53, wait until 8:00 to start looping through BG colors. */
function start() {
	var d = new Date(), m = (3600 * 1000) - d.getMilliseconds();
	count = d.getHours();
	document.body.style.backgroundImage = ((count > 3 && count < 21) ? url_day : url_night);
	document.body.style.backgroundPosition = "top";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "contain";
	document.body.style.backgroundColor = hourCodes[count];
	setTimeout(loop, m);
}

/* Function starts loop, then calls update() at hour-long intervals. */
function loop() {
	count = new Date().getHours();
	document.body.style.backgroundImage = ((count > 3 && count < 21) ? url_day : url_night);
	document.body.style.backgroundPosition = "top";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "contain";
	document.body.style.backgroundColor = hourCodes[count];
	setInterval(update, 1.5 * 1000);
	count++;
}

/* Function called repeatedly to transition to next color. */
function update() {
	document.body.style.backgroundImage = ((count > 3 && count < 21) ? url_day : url_night);
	document.body.style.backgroundPosition = "top";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "contain";
	document.body.style.backgroundColor = hourCodes[count];
	count = (count + 1) % 24;
}