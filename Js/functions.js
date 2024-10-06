document.addEventListener("DOMContentLoaded", function() {
   
    const newRowBtn = document.querySelector("#newRowBtn");
    const jokerTable = document.querySelector("#jokerTable");
    const rowCount = document.querySelector("#rowCount");

    let rowCountNumber = 0;

    
    newRowBtn.addEventListener("click", function() {
        
        const newRow = document.createElement("tr");

      
        for (let i = 0; i < 7; i++) {
            const newCell = document.createElement("td");
            const randomNumber = Math.floor(Math.random() * 10); 
            newCell.textContent = randomNumber;
            newRow.appendChild(newCell);
        }

       
        jokerTable.appendChild(newRow);

       
        rowCountNumber++;
        rowCount.textContent = `Arvottuja rivejä: ${rowCountNumber}`;
    });
});