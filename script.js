var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listDivs = document.querySelectorAll(".list-item");
var listButtons = document.querySelectorAll("li button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create list element
	var li = document.createElement("li");

	// create div with text
	var listDiv = document.createElement("div");
	listDiv.classList.add("list-item")
	listDiv.appendChild(document.createTextNode(input.value));
	li.appendChild(listDiv);

	// create delete button
	var but = document.createElement("button");
	but.appendChild(document.createTextNode("Delete"));
	li.appendChild(but);

	// add list item to unordered list
	ul.appendChild(li);
	input.value = "";

	// add event listener for marking task as done
	listDiv.addEventListener("click", () => {
		listDiv.classList.toggle("done");
	})

	// add event listener for deleting tasks from list
	but.addEventListener("click", () => {
		deleteListElement(but);
	})
}

function deleteListElement(lb) {
	var parent = lb.parentElement;
	parent.remove();
	return null;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
