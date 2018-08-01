var me = {
	firstName: "Yair",
	lastName: "Tal",
	favoriteFoods: ["Spagetti", "Frenchfries"],
	age: 16,
	picture: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png"
}

var me_string = JSON.stringify(me);
document.write(me_string);