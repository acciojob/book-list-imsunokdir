function addBook(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  // Check for empty fields
  if (!title || !author || !isbn) {
    alert("Please fill out all fields!");
    return;
  }

  let tbody = document.querySelector("tbody");
  let data = [title, author, isbn];
  let newTr = document.createElement("tr");

  for (let i of data) {
    let newTd = document.createElement("td");
    newTd.textContent = i;
    newTr.appendChild(newTd);
  }

  let newTd = document.createElement("td");
  newTd.textContent = "X";
  newTd.classList.add("delete");
  newTr.appendChild(newTd);
  tbody.appendChild(newTr);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

const table = document.querySelector('table');
table.addEventListener('click', (event) => {
  const deleteTD = event.target.closest('td.delete');
  if (deleteTD) {
    deleteTD.parentElement.remove(); // Remove the entire row
  }
});