function addTable() {
  var container = document.querySelector(".container");
  var newTable = document.createElement("div");
  newTable.classList.add("table");
  var newTableId = "table" + (document.querySelectorAll(".table").length + 1);
  newTable.id = newTableId;
  newTable.innerHTML = `
        <h2>Treino ${String.fromCharCode(
          65 + document.querySelectorAll(".table").length
        )}</h2>
        <table>
            <thead>
                <tr>
                    <th>Treino</th>
                    <th>Série</th>
                    <th>Intervalo</th>
                </tr>
            </thead>
            <tbody id="tbody${newTableId}">
                <!-- Linhas da Tabela serão adicionadas aqui via JavaScript -->
            </tbody>
        </table>
        <button class="addButton" onclick="addRow('tbody${newTableId}')">+</button>
    `;
  container.appendChild(newTable);
}

function addRow(tbodyId) {
  var tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  var newRow = document.createElement("tr");

  for (var i = 0; i < 3; i++) {
    var cell = document.createElement("td");
    cell.contentEditable = true;
    newRow.appendChild(cell);
  }

  var removeButtonCell = document.createElement("td");
  var removeButton = document.createElement("button");
  removeButton.innerText = "-";
  removeButton.classList.add("removeButton");
  removeButton.onclick = function () {
    removeRow(this);
  };

  removeButtonCell.appendChild(removeButton);
  newRow.appendChild(removeButtonCell);

  tbody.appendChild(newRow);
}

function generatePDF() {
  var element = document.getElementById("main");
  html2pdf().from(element).save();
}

function removeRow(button) {
  var row = button.parentNode.parentNode;
  var tbody = row.parentNode;
  tbody.removeChild(row);

  var rows = tbody.querySelectorAll("tr");
  rows.forEach((row, index) => {
    var cells = row.querySelectorAll("td");
  });
}

window.addEventListener('DOMContentLoaded', function () {
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
      const headers = table.querySelectorAll('th');
      headers.forEach((header, index) => {
          if (index !== headers.length - 1) {
              header.style.borderRight = '2px solid #ddd';
          }
      });

      const rows = table.querySelectorAll('tr');
      rows.forEach(row => {
          const cells = row.querySelectorAll('td');
          cells.forEach((cell, index) => {
              if (index !== cells.length - 1) {
                  cell.style.borderRight = '2px solid #ddd';
              }
          });
      });
  });
});