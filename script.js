//your JS code here. If required.

function addBook(event) {
	event.preventDefault()
    
	let tbody = document.querySelector("tbody");
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;
	let data = [title, author, isbn,"X"]
	let table = document.getElementsByTagName("table")[0];
	let newTr = document.createElement("tr");

	for(let i of data){
		let newTd = document.createElement("td");
		newTd.textContent = i;
		newTr.appendChild(newTd);
	}
	
	tbody.appendChild(newTr);
	document.getElementById("title").value=""
	document.getElementById("author").value=""
	document.getElementById("isbn").value=""
	
	
}



