export const displayData = (personData) => {
    const creatingData = document.querySelector('.main');
    const tableData = document.createElement('section');
    const table = document.createElement('table');
    const header = document.createElement('thead');
    
    const personDataSize = Object.keys(personData).length;

    let dataArray = [];
    dataArray.push(personData);

    tableData.classList.add('table');
    table.classList.add('display');
    tableData.appendChild(table);
    
    table.appendChild(header);
 
    for(const key in personData){
        const headerRow = document.createElement('th');
        const headerData = header.appendChild(headerRow);
        
        headerData.innerHTML = key;    
    }

    for(let i = 0; i < personDataSize; ++i){
        const rowData = table.insertRow(-1);

        for(const key in dataArray[i]){
            if(dataArray[i].hasOwnProperty(key)){
                const cell = rowData.insertCell(-1);
                cell.textContent = dataArray[i][key];
            }
        }
    }
    
    creatingData.appendChild(tableData);
}