let craftedPrices = [];
let flippedPrices = [];

// function marginSort() {
//   for(let i = 0; i< flippedPrices.length; i++) {
//     flippedPrices[];
//   }
 
// }

  function generateCraftedPrices(craftedPrices) {
    const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');
    let craftItems = Object.keys(craftRecipies);
    for (item of craftItems) {
        craftedPrices.push(getCraftPrices(bazaarData.products, craftRecipies[item], item));

    }
  }
  function getFlippedPrices(flippedPrices) {
    const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');
    for (item of buyAndSellItems) {
      flippedPrices.push(getBuyAndSellPrices(bazaarData.products, item));
    }
  }
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key.replaceAll("_", " ")+"\t");
      th.appendChild(text);
      row.appendChild(th);
    }
  }


  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text;
        if (key == "item_name") {
          text = document.createTextNode(element[key].replaceAll("_", " ")+":");
        }else if(key == "margin_per") {
          text = document.createTextNode(element[key]+"%");
        }else {
          text = document.createTextNode(Math.round(element[key]));
        }
        
        cell.appendChild(text);
      }
    }
  }
  function deleteTableRows(table) {
    for (let i = 0; i< craftedPrices.length; i++) {
        
     table.deleteRow(i+1);
    }
  }

  generateCraftedPrices(craftedPrices);
  let craftTable = document.getElementById("CraftedProfitTable");
  let craftData = Object.keys(craftedPrices[0]);
  generateTableHead(craftTable, craftData);
  generateTable(craftTable, craftedPrices);
  
  getFlippedPrices(flippedPrices);
  let flippedTable = document.getElementById("FlippedMarginProfitTable");
  let flippedData = Object.keys(flippedPrices[0]);
  generateTableHead(flippedTable, flippedData);
  generateTable(flippedTable, flippedPrices);

//might work but not sure rn
 
  function reloadBazaarTable() {
    for (let i = 0; i< craftedPrices.length; i++) {
        craftedPrices.pop();
    }
   // deleteTableRows(table);
    generateCraftedPrices(craftedPrices);
     let data = Object.keys(craftedPrices[0]);
  
   // generateTableHead(table, data);
    //generateTable(table, craftedPrices);

  }
