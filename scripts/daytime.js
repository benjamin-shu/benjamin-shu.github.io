hourCodes = ["#003399", "#0040a5", "#004cb1", "#0059bd", "#0066cc", "#0075d2",
	"#0084da", "#0093e2", "#00a2ea", "#00b1f2", "#00c0fa", "#00ccff",
	"#00e1ff", "#00ccff", "#00c0fa", "#00b1f2", "#00a2ea", "#0093e2",
	"#0084da", "#0075d2", "#0066cc", "#0059bd", "#004cb1", "#0040a5" ];

/* When page loads, start by waiting until next hour. */
/* (i.e. if page loads at 7:53, wait until 8:00 to start looping through BG colors. */
function start() {
	var d = new Date(), h = d.getHours(), m = 1000 - d.getMilliseconds();
	document.body.style.background = hourCodes[h];
	
	setTimeout(loop, m);
}

/* Function starts loop, then calls update() at hour-long intervals. */
function loop() {
	var h = new Date().getHours();
	document.body.style.background = hourCodes[h];
	setInterval(update, 3600 * 1000);
}

/* Function called repeatedly to transition to next color. */
function update() {
	var h = new Date().getHours();
	document.body.style.background = hourCodes[h];
}