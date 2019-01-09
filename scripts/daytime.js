var hourCodes = ["#003399", "#0040a5", "#004cb1", "#0059bd", "#0066cc", "#0075d2",
	"#0084da", "#0093e2", "#00a2ea", "#00b1f2", "#00c0fa", "#00ccff",
	"#00e1ff", "#00ccff", "#00c0fa", "#00b1f2", "#00a2ea", "#0093e2",
	"#0084da", "#0075d2", "#0066cc", "#0059bd", "#004cb1", "#0040a5" ];

var d = new Date(), h = d.getHours();
document.body.style.background = hourCodes[h];