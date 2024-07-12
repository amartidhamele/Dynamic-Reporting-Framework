// document.addEventListener('DOMContentLoaded', () => {
//     const homeLink = document.getElementById('home-link');
//     const addButton = document.getElementById('add-button');
//     const dataTable = document.getElementById('data-table');
//     const modal = document.getElementById('modal');
//     const resultModal = document.getElementById('result-modal');
//     const closeModal = document.querySelectorAll('.close');
//     const generateTableButton = document.getElementById('generate-table');
//     const resultTableContainer = document.getElementById('result-table-container');

//     let serialNumber = 1;

//     homeLink.addEventListener('click', () => {
//         window.location.reload();
//     });

//     addButton.addEventListener('click', () => {
//         const dataProviderId = prompt('Enter Data Provider ID:');
//         const tableName = prompt('Enter Table Name:');

//         if (dataProviderId && tableName) {
//             addRow(serialNumber++, dataProviderId, tableName);
//             saveTableData();
//             alert(`Folder '${dataProviderId}' created with table '${tableName}'`);
//         }
//     });

//     function addRow(serialNumber, dataProviderId, tableName) {
//         const newRow = document.createElement('tr');

//         const serialNumberCell = document.createElement('td');
//         serialNumberCell.textContent = serialNumber;
//         newRow.appendChild(serialNumberCell);

//         const dataProviderCell = document.createElement('td');
//         const dataProviderLink = document.createElement('a');
//         dataProviderLink.href = 'test.html';
//         dataProviderLink.textContent = dataProviderId;
//         dataProviderLink.classList.add('data-provider');
//         dataProviderCell.appendChild(dataProviderLink);
//         newRow.appendChild(dataProviderCell);

//         const systemCell = document.createElement('td');
//         systemCell.textContent = 'SQL';
//         newRow.appendChild(systemCell);

//         const tableNameCell = document.createElement('td');
//         tableNameCell.textContent = tableName;
//         newRow.appendChild(tableNameCell);

//         dataTable.appendChild(newRow);
//     }

//     function saveTableData() {
//         const rows = Array.from(dataTable.rows).map(row => ({
//             serialNumber: row.cells[0].textContent,
//             dataProviderId: row.cells[1].textContent,
//             system: row.cells[2].textContent,
//             tableName: row.cells[3].textContent
//         }));
//         localStorage.setItem('tableData', JSON.stringify(rows));
//     }

//     function loadTableData() {
//         const tableData = JSON.parse(localStorage.getItem('tableData'));
//         if (tableData) {
//             tableData.forEach(rowData => {
//                 addRow(rowData.serialNumber, rowData.dataProviderId, rowData.tableName);
//             });
//         }
//     }

//     closeModal.forEach(btn => {
//         btn.addEventListener('click', () => {
//             modal.style.display = 'none';
//             resultModal.style.display = 'none';
//         });
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//         if (event.target === resultModal) {
//             resultModal.style.display = 'none';
//         }
//     });

//     generateTableButton.addEventListener('click', () => {
//         const selectedFields = Array.from(document.querySelectorAll('#field-table tbody input:checked'))
//             .map(checkbox => checkbox.value);

//         if (selectedFields.length > 0) {
//             const data = [
//                 {
//                     EmployeeID: 1,
//                     Age: 34,
//                     Attrition: 'Yes',
//                     BusinessTravel: 'Travel_Rarely',
//                     DailyRate: 1102,
//                 },
//                 {
//                     EmployeeID: 2,
//                     Age: 49,
//                     Attrition: 'No',
//                     BusinessTravel: 'Travel_Frequently',
//                     DailyRate: 279,
//                 },
//                 // Add more data as needed
//             ];

//             const filteredData = data.map(item => {
//                 const filteredItem = {};
//                 selectedFields.forEach(field => {
//                     filteredItem[field] = item[field];
//                 });
//                 return filteredItem;
//             });

//             generateTable(filteredData);
//             modal.style.display = 'none';
//             resultModal.style.display = 'block';
//         } else {
//             alert('Please select at least one field.');
//         }
//     });

//     function generateTable(data) {
//         const table = document.createElement('table');
//         table.classList.add('generated-table');

//         const thead = document.createElement('thead');
//         const headerRow = document.createElement('tr');

//         Object.keys(data[0]).forEach(field => {
//             const th = document.createElement('th');
//             th.textContent = field;
//             headerRow.appendChild(th);
//         });

//         thead.appendChild(headerRow);
//         table.appendChild(thead);

//         const tbody = document.createElement('tbody');

//         data.forEach(item => {
//             const row = document.createElement('tr');
//             Object.values(item).forEach(value => {
//                 const td = document.createElement('td');
//                 td.textContent = value;
//                 row.appendChild(td);
//             });
//             tbody.appendChild(row);
//         });

//         table.appendChild(tbody);
//         resultTableContainer.innerHTML = '';
//         resultTableContainer.appendChild(table);
//     }

//     loadTableData();
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const homeLink = document.getElementById('home-link');
//     const addButton = document.getElementById('add-button');
//     const dataTable = document.getElementById('data-table');
//     const modal = document.getElementById('modal');
//     const resultModal = document.getElementById('result-modal');
//     const closeModal = document.querySelectorAll('.close');
//     const generateTableButton = document.getElementById('generate-table');
//     const resultTableContainer = document.getElementById('result-table-container');

//     let serialNumber = 1;

//     homeLink.addEventListener('click', () => {
//         window.location.reload();
//     });

//     addButton.addEventListener('click', () => {
//         const dataProviderId = prompt('Enter Data Provider ID:');
//         const tableName = prompt('Enter Table Name:');

//         if (dataProviderId && tableName) {
//             addRow(serialNumber++, dataProviderId, tableName);
//             saveTableData();
//             alert(`Folder '${dataProviderId}' created with table '${tableName}'`);
//         }
//     });

//     function addRow(serialNumber, dataProviderId, tableName) {
//         const newRow = document.createElement('tr');

//         const serialNumberCell = document.createElement('td');
//         serialNumberCell.textContent = serialNumber;
//         newRow.appendChild(serialNumberCell);

//         const dataProviderCell = document.createElement('td');
//         const dataProviderLink = document.createElement('a');
//         dataProviderLink.href = 'test.html';
//         dataProviderLink.textContent = dataProviderId;
//         dataProviderLink.classList.add('data-provider');
//         dataProviderCell.appendChild(dataProviderLink);
//         newRow.appendChild(dataProviderCell);

//         const systemCell = document.createElement('td');
//         systemCell.textContent = 'SQL';
//         newRow.appendChild(systemCell);

//         const tableNameCell = document.createElement('td');
//         tableNameCell.textContent = tableName;
//         newRow.appendChild(tableNameCell);

//         dataTable.appendChild(newRow);
//     }

//     function saveTableData() {
//         const rows = Array.from(dataTable.rows).map(row => ({
//             serialNumber: row.cells[0].textContent,
//             dataProviderId: row.cells[1].querySelector('a').textContent,
//             system: row.cells[2].textContent,
//             tableName: row.cells[3].textContent
//         }));
//         localStorage.setItem('tableData', JSON.stringify(rows));
//     }

//     function loadTableData() {
//         const tableData = JSON.parse(localStorage.getItem('tableData'));
//         if (tableData) {
//             tableData.forEach((rowData, index) => {
//                 addRow(index + 1, rowData.dataProviderId, rowData.tableName);
//             });
//             serialNumber = tableData.length + 1;
//         }
//     }

//     closeModal.forEach(btn => {
//         btn.addEventListener('click', () => {
//             modal.style.display = 'none';
//             resultModal.style.display = 'none';
//         });
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//         if (event.target === resultModal) {
//             resultModal.style.display = 'none';
//         }
//     });

//     generateTableButton.addEventListener('click', () => {
//         const selectedFields = Array.from(document.querySelectorAll('#field-table tbody input:checked'))
//             .map(checkbox => checkbox.value);

//         if (selectedFields.length > 0) {
//             const data = [
//                 {
//                     EmployeeID: 1,
//                     Age: 34,
//                     Attrition: 'Yes',
//                     BusinessTravel: 'Travel_Rarely',
//                     DailyRate: 1102,
//                 },
//                 {
//                     EmployeeID: 2,
//                     Age: 49,
//                     Attrition: 'No',
//                     BusinessTravel: 'Travel_Frequently',
//                     DailyRate: 279,
//                 },
//                 // Add more data as needed
//             ];

//             const filteredData = data.map(item => {
//                 const filteredItem = {};
//                 selectedFields.forEach(field => {
//                     filteredItem[field] = item[field];
//                 });
//                 return filteredItem;
//             });

//             generateTable(filteredData);
//             modal.style.display = 'none';
//             resultModal.style.display = 'block';
//         } else {
//             alert('Please select at least one field.');
//         }
//     });

//     function generateTable(data) {
//         const table = document.createElement('table');
//         table.classList.add('generated-table');

//         const thead = document.createElement('thead');
//         const headerRow = document.createElement('tr');

//         Object.keys(data[0]).forEach(field => {
//             const th = document.createElement('th');
//             th.textContent = field;
//             headerRow.appendChild(th);
//         });

//         thead.appendChild(headerRow);
//         table.appendChild(thead);

//         const tbody = document.createElement('tbody');

//         data.forEach(item => {
//             const row = document.createElement('tr');
//             Object.values(item).forEach(value => {
//                 const td = document.createElement('td');
//                 td.textContent = value;
//                 row.appendChild(td);
//             });
//             tbody.appendChild(row);
//         });

//         table.appendChild(tbody);
//         resultTableContainer.innerHTML = '';
//         resultTableContainer.appendChild(table);
//     }

//     loadTableData();
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const homeLink = document.getElementById('home-link');
//     const addButton = document.getElementById('add-button');
//     const dataTable = document.getElementById('data-table');
//     const modal = document.getElementById('modal');
//     const resultModal = document.getElementById('result-modal');
//     const closeModal = document.querySelectorAll('.close');
//     const generateTableButton = document.getElementById('generate-table');
//     const resultTableContainer = document.getElementById('result-table-container');

//     let serialNumber = 1;

//     homeLink.addEventListener('click', () => {
//         window.location.reload();
//     });

//     addButton.addEventListener('click', () => {
//         const dataProviderId = prompt('Enter Data Provider ID:');
//         const tableName = prompt('Enter Table Name:');

//         if (dataProviderId && tableName) {
//             const createdOn = new Date().toLocaleDateString();
//             addRow(serialNumber++, dataProviderId, tableName, createdOn);
//             saveTableData();
//             alert(`Folder '${dataProviderId}' created with table '${tableName}'`);
//         }
//     });

//     function addRow(serialNumber, dataProviderId, tableName, createdOn) {
//         const newRow = document.createElement('tr');

//         const serialNumberCell = document.createElement('td');
//         serialNumberCell.textContent = serialNumber;
//         newRow.appendChild(serialNumberCell);

//         const dataProviderCell = document.createElement('td');
//         const dataProviderLink = document.createElement('a');
//         dataProviderLink.href = 'test.html';
//         dataProviderLink.textContent = dataProviderId;
//         dataProviderLink.classList.add('data-provider');
//         dataProviderCell.appendChild(dataProviderLink);
//         newRow.appendChild(dataProviderCell);

//         const systemCell = document.createElement('td');
//         systemCell.textContent = 'SQL';
//         newRow.appendChild(systemCell);

//         const tableNameCell = document.createElement('td');
//         tableNameCell.textContent = tableName;
//         newRow.appendChild(tableNameCell);

//         const createdOnCell = document.createElement('td');
//         createdOnCell.textContent = createdOn;
//         newRow.appendChild(createdOnCell);

//         const actionsCell = document.createElement('td');

//         const viewButton = document.createElement('button');
//         viewButton.textContent = 'View';
//         viewButton.addEventListener('click', () => {
//             alert(`Viewing table: ${tableName}`);
//         });
//         actionsCell.appendChild(viewButton);

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => {
//             newRow.remove();
//             saveTableData();
//             alert(`Table '${tableName}' deleted.`);
//         });
//         actionsCell.appendChild(deleteButton);

//         newRow.appendChild(actionsCell);

//         dataTable.appendChild(newRow);
//     }

//     function saveTableData() {
//         const rows = Array.from(dataTable.rows).map(row => ({
//             serialNumber: row.cells[0].textContent,
//             dataProviderId: row.cells[1].querySelector('a').textContent,
//             system: row.cells[2].textContent,
//             tableName: row.cells[3].textContent,
//             createdOn: row.cells[4].textContent
//         }));
//         localStorage.setItem('tableData', JSON.stringify(rows));
//     }

//     function loadTableData() {
//         const tableData = JSON.parse(localStorage.getItem('tableData'));
//         if (tableData) {
//             tableData.forEach((rowData, index) => {
//                 addRow(index + 1, rowData.dataProviderId, rowData.tableName, rowData.createdOn);
//             });
//             serialNumber = tableData.length + 1;
//         }
//     }

//     closeModal.forEach(btn => {
//         btn.addEventListener('click', () => {
//             modal.style.display = 'none';
//             resultModal.style.display = 'none';
//         });
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//         if (event.target === resultModal) {
//             resultModal.style.display = 'none';
//         }
//     });

//     generateTableButton.addEventListener('click', () => {
//         const selectedFields = Array.from(document.querySelectorAll('#field-table tbody input:checked'))
//             .map(checkbox => checkbox.value);

//         if (selectedFields.length > 0) {
//             const data = [
//                 {
//                     EmployeeID: 1,
//                     Age: 34,
//                     Attrition: 'Yes',
//                     BusinessTravel: 'Travel_Rarely',
//                     DailyRate: 1102,
//                 },
//                 {
//                     EmployeeID: 2,
//                     Age: 49,
//                     Attrition: 'No',
//                     BusinessTravel: 'Travel_Frequently',
//                     DailyRate: 279,
//                 },
//                 // Add more data as needed
//             ];

//             const filteredData = data.map(item => {
//                 const filteredItem = {};
//                 selectedFields.forEach(field => {
//                     filteredItem[field] = item[field];
//                 });
//                 return filteredItem;
//             });

//             generateTable(filteredData);
//             modal.style.display = 'none';
//             resultModal.style.display = 'block';
//         } else {
//             alert('Please select at least one field.');
//         }
//     });

//     function generateTable(data) {
//         const table = document.createElement('table');
//         table.classList.add('generated-table');

//         const thead = document.createElement('thead');
//         const headerRow = document.createElement('tr');

//         Object.keys(data[0]).forEach(field => {
//             const th = document.createElement('th');
//             th.textContent = field;
//             headerRow.appendChild(th);
//         });

//         thead.appendChild(headerRow);
//         table.appendChild(thead);

//         const tbody = document.createElement('tbody');

//         data.forEach(item => {
//             const row = document.createElement('tr');
//             Object.values(item).forEach(value => {
//                 const td = document.createElement('td');
//                 td.textContent = value;
//                 row.appendChild(td);
//             });
//             tbody.appendChild(row);
//         });

//         table.appendChild(tbody);
//         resultTableContainer.innerHTML = '';
//         resultTableContainer.appendChild(table);
//     }

//     loadTableData();
// });


document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const addButton = document.getElementById('add-button');
    const dataTable = document.getElementById('data-table');
    const modal = document.getElementById('modal');
    const resultModal = document.getElementById('result-modal');
    const closeModal = document.querySelectorAll('.close');
    const generateTableButton = document.getElementById('generate-table');
    const resultTableContainer = document.getElementById('result-table-container');

    let serialNumber = 1;

    homeLink.addEventListener('click', () => {
        window.location.reload();
    });

    addButton.addEventListener('click', () => {
        const dataProviderId = prompt('Enter Data Provider ID:');
        const tableName = prompt('Enter Table Name:');

        if (dataProviderId && tableName) {
            const createdOn = new Date().toLocaleDateString();
            addRow(serialNumber++, dataProviderId, tableName, createdOn);
            saveTableData();
            alert(`Folder '${dataProviderId}' created with table '${tableName}'`);
        }
    });

    function addRow(serialNumber, dataProviderId, tableName, createdOn) {
        const newRow = document.createElement('tr');

        const serialNumberCell = document.createElement('td');
        serialNumberCell.textContent = serialNumber;
        newRow.appendChild(serialNumberCell);

        const dataProviderCell = document.createElement('td');
        const dataProviderLink = document.createElement('a');
        dataProviderLink.href = 'test.html';
        dataProviderLink.textContent = dataProviderId;
        dataProviderLink.classList.add('data-provider');
        dataProviderCell.appendChild(dataProviderLink);
        newRow.appendChild(dataProviderCell);

        const systemCell = document.createElement('td');
        systemCell.textContent = 'SQL';
        newRow.appendChild(systemCell);

        const tableNameCell = document.createElement('td');
        tableNameCell.textContent = tableName;
        newRow.appendChild(tableNameCell);

        const createdOnCell = document.createElement('td');
        createdOnCell.textContent = createdOn;
        newRow.appendChild(createdOnCell);

        const actionsCell = document.createElement('td');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Entry'; // Changed text
        deleteButton.addEventListener('click', () => {
            newRow.remove();
            saveTableData();
            alert(`Table '${tableName}' deleted.`);
        });
        actionsCell.appendChild(deleteButton);

        newRow.appendChild(actionsCell);

        dataTable.appendChild(newRow);
    }

    function saveTableData() {
        const rows = Array.from(dataTable.rows).map(row => ({
            serialNumber: row.cells[0].textContent,
            dataProviderId: row.cells[1].querySelector('a').textContent,
            system: row.cells[2].textContent,
            tableName: row.cells[3].textContent,
            createdOn: row.cells[4].textContent
        }));
        localStorage.setItem('tableData', JSON.stringify(rows));
    }

    function loadTableData() {
        const tableData = JSON.parse(localStorage.getItem('tableData'));
        if (tableData) {
            tableData.forEach((rowData, index) => {
                addRow(index + 1, rowData.dataProviderId, rowData.tableName, rowData.createdOn);
            });
            serialNumber = tableData.length + 1;
        }
    }

    closeModal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            resultModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === resultModal) {
            resultModal.style.display = 'none';
        }
    });

    generateTableButton.addEventListener('click', () => {
        const selectedFields = Array.from(document.querySelectorAll('#field-table tbody input:checked'))
            .map(checkbox => checkbox.value);

        if (selectedFields.length > 0) {
            const data = [
                {
                    EmployeeID: 1,
                    Age: 34,
                    Attrition: 'Yes',
                    BusinessTravel: 'Travel_Rarely',
                    DailyRate: 1102,
                },
                {
                    EmployeeID: 2,
                    Age: 49,
                    Attrition: 'No',
                    BusinessTravel: 'Travel_Frequently',
                    DailyRate: 279,
                },
                // Add more data as needed
            ];

            const filteredData = data.map(item => {
                const filteredItem = {};
                selectedFields.forEach(field => {
                    filteredItem[field] = item[field];
                });
                return filteredItem;
            });

            generateTable(filteredData);
            modal.style.display = 'none';
            resultModal.style.display = 'block';
        } else {
            alert('Please select at least one field.');
        }
    });

    function generateTable(data) {
        const table = document.createElement('table');
        table.classList.add('generated-table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        Object.keys(data[0]).forEach(field => {
            const th = document.createElement('th');
            th.textContent = field;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        resultTableContainer.innerHTML = '';
        resultTableContainer.appendChild(table);
    }

    loadTableData();
});


