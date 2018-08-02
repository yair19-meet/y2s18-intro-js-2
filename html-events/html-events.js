// Put all your JavaScript in this file!
function changeColor() {
	var c = askColor();
	document.getElementsByTagName("body")[0].style.backgroundColor = c;

}

function askColor() {
	return prompt("Pick a color: ");
}