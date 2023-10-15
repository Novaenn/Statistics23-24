document.getElementById('csvFile').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            parseCSV(content);
        };

        reader.readAsText(file);
    }
}

function parseCSV(csvContent) {
    const table = document.getElementById('csvData');
    table.innerHTML = ''; // Clear the existing table, if any.

    csvContent
        .split('\n')
        .map(row => row.split(','))
        .forEach(rowData => {
            const row = table.insertRow();
            rowData.forEach(cellData => {
                const cell = row.insertCell();
                cell.textContent = cellData;
            });
        });
}
