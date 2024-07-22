//your JS code here. If required.




function addBook(event) {
	event.preventDefault()
    
	let tbody = document.querySelector("tbody");
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;
	let data = [title, author, isbn]
	let table = document.getElementsByTagName("table")[0];
	let newTr = document.createElement("tr");

	for(let i of data){
		let newTd = document.createElement("td");
		newTd.textContent = i;
		newTr.appendChild(newTd);
	}
	
	let newTd = document.createElement("td");
	newTd.textContent = "X";
	newTd.classList.add("delete");
	newTr.appendChild(newTd);
	tbody.appendChild(newTr);
	document.getElementById("title").value=""
	document.getElementById("author").value=""
	document.getElementById("isbn").value=""
	
const tableRows = document.querySelectorAll('tr');

// Loop through each row
tableRows.forEach(row => {
  // Find all delete TDs within the row
  const deleteTDs = row.querySelectorAll('td.delete');

  // Add click event listener to each delete TD
  deleteTDs.forEach(deleteTD => {
    deleteTD.addEventListener('click', () => {
      // Remove the entire table row (parent of the clicked TD)
      row.remove();
    });
  });
});

}







