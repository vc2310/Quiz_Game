var family_member_count = 9;
var current_index = 0;
$('[data-toggle="tooltip"]').tooltip();
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

var arr = Array.from(Array(9).keys())
shuffle(arr)

//This function changes the image and options
function question_page(index) {
	//console.log(index);
	document.getElementById("ques_num").innerHTML = index + 1;
	document.getElementById("image").src = family_list[arr[index]].image;
	var buttons = document.getElementsByClassName("option");
	//console.log(buttons);

	for (let j = 0; j < 4; j++) {
		buttons[j].innerHTML = family_list[arr[index]].options[j][1];
		buttons[j].value = family_list[arr[index]].options[j][0];
		buttons[j].disabled = false;
		buttons[j].style.background = "white";
		buttons[j].style.color = "black";
	}
	document.getElementById("next_button").style.display = "none";
}

//Response function after a user selects an option
function clicked(buttonclicked) {
	var buttons = document.getElementsByClassName("option");
	var button_value = buttons[buttonclicked].value;
	//console.log(button_value);
	if (button_value == "right") {
		var x = document.getElementById("right_snackbar");
		x.className = "show";
		setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
		setTimeout(function () {
			current_index += 1;
			if (current_index >= 9) {
				document.getElementById("next_button").style.display = "none";
				document.getElementById("finish_button").style.display = "block";
			} else {
				question_page(current_index);
			}
		}, 1000);
	} else {
		var x = document.getElementById("wrong_snackbar");
		x.className = "show";
		setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
		buttons[buttonclicked].style.background = "#ff726f "
		if (current_index >= 8) {
			document.getElementById("next_button").style.display = "none";
			document.getElementById("finish_button").style.display = "block";
		} else {
			document.getElementById("next_button").style.display = "block";
		}

	}

	for (let j = 0; j < 4; j++) {
		if (buttons[j].value == "right") {
			buttons[j].style.background = "green";
		}
		buttons[j].disabled = true;

	}

}

function next_question() {
	current_index += 1;
	if (current_index >= 9) {
		document.getElementById("next_button").style.display = "none";
		document.getElementById("finish_button").style.display = "block";
	} else {
		question_page(current_index);
	}

}
question_page(current_index);