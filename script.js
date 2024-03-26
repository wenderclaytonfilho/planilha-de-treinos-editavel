function addTable() {
    var container = document.querySelector('.container');
    var newTable = document.createElement('div');
    newTable.classList.add('table');
    var newTableId = 'table' + (document.querySelectorAll('.table').length + 1);
    newTable.id = newTableId;
    newTable.innerHTML = `
        <h2>Treino ${String.fromCharCode(65 + document.querySelectorAll('.table').length)}</h2>
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

    var newRow = document.createElement('tr');
    for (var i = 0; i < 3; i++) {
        var cell = document.createElement('td');
        cell.contentEditable = true;
        newRow.appendChild(cell);
    }

    tbody.appendChild(newRow);
}

function generatePDF() {
    var element = document.getElementById("container");
    html2pdf().from(element).save();
}


