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

    // Define the column headers you want to extract.
    const desiredColumns = ["(Anonymous) Stat Unit ID", "Hard Worker (0-5)", "weight"];
    
    const rows = csvContent.split('\n');
    const headers = rows[0].split(',');

    // Find the indices of the desired columns.
    const columnIndices = desiredColumns.map(column => headers.indexOf(column));

    // Create the table header with the desired columns.
    const headerRow = table.insertRow();
    columnIndices.forEach(index => {
        const cell = headerRow.insertCell();
        cell.textContent = headers[index];
    });

    // Iterate through the rows and extract the desired columns.
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(',');
        const row = table.insertRow();
        columnIndices.forEach(index => {
            const cell = row.insertCell();
            cell.textContent = rowData[index];
        });
    }
}
