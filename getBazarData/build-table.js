let allPrices = [
      //
  ];
  
  function generateAllPrices(allPrices) {
    const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');
    let craftItems = Object.keys(craftRecipies);
    for (item of craftItems) {
        allPrices.push(getCraftPrices(bazaarData.products, craftRecipies[item], item));

    }
  }
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }


  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  function deleteTableRows(table) {
    for (let i = 0; i< allPrices.length; i++) {
        
     table.deleteRow(i+1);
    }
  }

  generateAllPrices(allPrices);
  let table = document.querySelector("table");
  let data = Object.keys(allPrices[0]);
  generateTableHead(table, data);
  generateTable(table, allPrices);

 
  function reloadBazaarTable() {
    for (let i = 0; i< allPrices.length; i++) {
        allPrices.pop();
    }
   // deleteTableRows(table);
    generateAllPrices(allPrices);
     let data = Object.keys(allPrices[0]);
  
   // generateTableHead(table, data);
    //generateTable(table, allPrices);

  }
