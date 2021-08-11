let app = document.getElementById("app")
let player = {
	direction: { x: 0, y: 0 },
	position: { x: 0, y: 0 },
	type: 1
}

function updateView() {
	let html = "";
	app.innerHTML = html;
}

function playerMove(e) {
	if (e.keyCode == 37) { // left
		player.direction = { x: -1, y: 0 };
	} else if (e.keyCode == 39) { // right
		player.direction = { x: 1, y: 0 };
	} else if (e.keyCode == 38) { // up
		player.direction = { x: 0, y: 1 };
	}
}