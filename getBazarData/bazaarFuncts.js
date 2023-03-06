//const bazaarLink = 'https://api.hypixel.net/skyblock/bazaar';

//const fs = require('fs')

const bobbinEn = {"SPOOKY_WATER_ORB":1, "SHARK_WATER_ORB":1, "WINTER_WATER_ORB":1, "LAVA_WATER_ORB":1, "BOBBIN_SCRIPTURES":1};
const pigman_sword = {"ENCHANTED_GRILLED_PORK":48};
const shark_water_orb = {"WATER_ORB":1, "ENCHANTED_SHARK_FIN": 12,"BLUE_SHARK_TOOTH":8, "TIGER_SHARK_TOOTH":4, "NURSE_SHARK_TOOTH":16, "GREAT_WHITE_SHARK_TOOTH":1 };
const winter_water_orb = {"WATER_ORB":1, "ICE_HUNK":128, "ENCHANTED_SNOW_BLOCK": 64, "BLUE_ICE_HUNK":32,"WHITE_GIFT":64, "GREEN_GIFT":16 };
const water_orb = {"ENCHANTED_RAW_FISH":16, "ENCHANTED_WATER_LILY":8, "ENCHANTED_RAW_SALMON":16, "ENCHANTED_PRISMARINE_SHARD":16, "DIVER_FRAGMENT":1, "ENCHANTED_PRISMARINE_CRYSTALS":16, "ENCHANTED_SPONGE":4, "ENCHANTED_PUFFERFISH":16, "ENCHANTED_CLOWNFISH":8}


function makeCraftRecepies() {

    document.getElementById('craftRecipies.txt')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
                window.alert(fr.result);
            }
              
            fr.readAsText(this.files[0]);
        })
}

//   
const craftRecipies = {
    "FINE_JASPER_GEM":{"FLAWED_JASPER_GEM":80},
    "FINE_AMBER_GEM":{"FLAWED_AMBER_GEM":80},
    "FINE_AMETHYST_GEM":{"FLAWED_AMETHYST_GEM":80},
    "FINE_TOPAZ_GEM":{"FLAWED_TOPAZ_GEM":80},
    "FLAWLESS_AMBER_GEM":{"FLAWED_AMBER_GEM":6400},
    "SPOOKY_WATER_ORB":{"WATER_ORB":1,"PURPLE_CANDY":64, "WEREWOLF_SKIN":24, "SOUL_FRAGMENT":1},
    "ENCHANTMENT_ULTIMATE_BOBBIN_TIME_3":{"SPOOKY_WATER_ORB":1, "SHARK_WATER_ORB":1, "WINTER_WATER_ORB":1, "LAVA_WATER_ORB":1, "BOBBIN_SCRIPTURES":1},
    "ACACIA_BIRDHOUSE":{"ENCHANTED_ACACIA_LOG":384},
    "SHARK_WATER_ORB":{"WATER_ORB":1, "ENCHANTED_SHARK_FIN": 12,"BLUE_SHARK_TOOTH":8, "TIGER_SHARK_TOOTH":4, "NURSE_SHARK_TOOTH":16, "GREAT_WHITE_SHARK_TOOTH":1 },
    'WINTER_WATER_ORB':{"WATER_ORB":1, "ICE_HUNK":128, "ENCHANTED_SNOW_BLOCK": 64, "BLUE_ICE_HUNK":32,"WHITE_GIFT":64, "GREEN_GIFT":16 },
    'WATER_ORB':{"ENCHANTED_RAW_FISH":16, "ENCHANTED_WATER_LILY":8, "ENCHANTED_RAW_SALMON":16, "ENCHANTED_PRISMARINE_SHARD":16, "DIVER_FRAGMENT":1, "ENCHANTED_PRISMARINE_CRYSTALS":16, "ENCHANTED_SPONGE":4, "ENCHANTED_PUFFERFISH":16, "ENCHANTED_CLOWNFISH":8},
    "CONDENSED_FERMENTO":{"FERMENTO":9},
    "ENCHANTED_LAVA_BUCKET":{"ENCHANTED_LAVA_BUCKET":1},
    "HOT_POTATO_BOOK":{"SUGAR_CANE":3, "ENCHANTED_BAKED_POTATO":1},
    "ENCHANTMENT_PRISTINE_1":{"FINE_TOPAZ_GEM":40,"SUGAR_CANE":21},
    "ENCHANTMENT_PRISTINE_4":{"FINE_TOPAZ_GEM":320,"SUGAR_CANE":168}
};
//"PIGMAN_SWORD":{"ENCHANTED_GRILLED_PORK":48},

const auctionItems = [
    "PIGMAN_SWORD"];
var aHData;
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        var newNode = new Node(data);

        if(this.root == null)
            this.root = newNode;
        else    
            this.insertNode(this.root, newNode);

    }
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left ===null) 
                node.left =newNode;
            else    
                this.insertNode(node.left, newNode);
            
        } else {
            if(node.right === null)
                node.right = newNode;
            else 
                this.insertNode(node.right, newNode);
        }

    }
}
function getApiCall(link) {
    var request = new XMLHttpRequest();
  
    request.open('GET', link, false);
  
    
    request.setRequestHeader('API-Key', '40d9eb95-bc07-41c6-9c9d-a9bee94bd11a');
    request.onreadystatechange = function () {
    if (this.readyState === 4) {
        
        //window.alert(this.status);
        //window.alert(this.getAllResponseHeaders());
        //window.alert(this.responseText);
        
    }
    };
    // if(api_key) {
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.send(JSON.stringify({"api_key":api_key}))
    // } else {
    request.send(null); //JSON.stringify(body)
    return JSON.parse(request.response);
    
   
}

function getWebsite(link) {
    var request = new XMLHttpRequest();
  
    request.open('GET', link);
  
    
    //request.setRequestHeader('API-Key', '40d9eb95-bc07-41c6-9c9d-a9bee94bd11a');
    request.onreadystatechange = function () {
    if (this.readyState === 4) {
        
        window.alert(this.status);
        window.alert(this.getAllResponseHeaders());
        window.alert(this.responseText);
        
    }
    };
    // if(api_key) {
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.send(JSON.stringify({"api_key":api_key}))
    // } else {
    request.send(null); //JSON.stringify(body)
    return request.response;
    
}

function fetchData(link) {
    fetch(link)
    .then((response)=> response.json())
    .then((data) => window.alert(JSON.stringify(data.products.WATER_ORB.quick_status)))
} 

  function getBuyOrder(item) {
        return item.sell_summary[0].pricePerUnit;
  }
  function getSellOrder(item) {
    return item.buy_summary[0].pricePerUnit;
  }
  function getInstaBuy(item) {
    return item.buy_summary[0].pricePerUnit;
  }
  function getInstaSell(item) {
    return item.sell_summary[0].pricePerUnit;
  }


  function getTotalBuyOrder(products, componentOb) {
    var sum = 0
    var keyArray = Object.keys(componentOb);
    for(var i = 0; i<keyArray.length; i++) {
        sum = sum + getBuyOrder(products[keyArray[i]])*componentOb[keyArray[i]];
    }
    return sum;
  }

  function getTotalInstaBuy(products, componentOb) {
    var sum = 0
    var keyArray = Object.keys(componentOb);
    for(var i = 0; i<keyArray.length; i++) {
        sum = sum + getInstaBuy(products[keyArray[i]])*componentOb[keyArray[i]];
    }
    return sum;
  }

  function getBobComponents(products) {
        var o_bobbinEn = getTotalBuyOrder(products, bobbinEn);
        var i_bobbinEn = getTotalInstaBuy(products, bobbinEn);
        var o_bobbinEnPrice = getSellOrder(products.ENCHANTMENT_ULTIMATE_BOBBIN_TIME_3);
        var i_bobbinEnPrice = getInstaSell(products.ENCHANTMENT_ULTIMATE_BOBBIN_TIME_3);
        return "Buy Order: "+ o_bobbinEn+"\nInsta buy: "+i_bobbinEn+"\nSell Order price: "+o_bobbinEnPrice+ "\nInsta Sell: "+i_bobbinEnPrice;

  }
function getAhPrices(products, craftItems, craftedItem) {
    var buyOrderPrice = getTotalBuyOrder(products, craftItems);
    var instaBuyPrice = getTotalInstaBuy(products, craftItems);
    var sellPrice = search(aHData, craftedItem);
    return {"item_name":craftedItem, "buy_order_price": buyOrderPrice, 
            "insta_buy_price":instaBuyPrice,
            "sell_price":sellPrice,  
            "best_net_gain":sellPrice-buyOrderPrice,
            "margin_per": (sellPrice-buyOrderPrice)/sellPrice};
}
  /*
    Products: the data  from teh bazaar
    craftItems: Object of all craft items for crafted item
    crafted item: naem of crafted item uppercase and with _
  */
  function getCraftPrices(products, craftItems, craftedItem) {
    var buyOrderPrice = getTotalBuyOrder(products, craftItems);
    var instaBuyPrice = getTotalInstaBuy(products, craftItems);
    if(auctionItems.includes(craftedItem)) {
        return getAhPrices(products, craftItems, craftedItem);
    } else {
    var craftedSellOrder = getSellOrder(products[craftedItem]);
    var craftedInstaSell = getInstaSell(products[craftedItem]);

    return {"item_name":craftedItem, "buy_order_price": buyOrderPrice, 
            "insta_buy_price":instaBuyPrice,
            "sell_order_price":craftedSellOrder, 
            "insta_sell_price":craftedInstaSell, 
            "best_net_gain":craftedSellOrder-buyOrderPrice,
            "margin_per": (craftedSellOrder-buyOrderPrice)/craftedSellOrder
            };//may not work "Sell Volume": products.sell_summary.quick_status.sellVolume
    }

 }
//  async function fetch_demo() {
//         const resp = await fetch('https://www.brandonfowler.me/skyblockah');

//         window.alert(resp);
//  }
function formatAHData() {
    var AHArray = new Array();
    var itemString = "";
    var index = 0;
    var ahData = getApiCall('https://api.hypixel.net/skyblock/auctions?page=0');
    for (var i = 0; i<ahData.totalPages; i++) {
        var ahData = getApiCall('https://api.hypixel.net/skyblock/auctions?page='+i);
        for(var j = 0; j<ahData.auctions.length;j++){
             var body = ahData.auctions[j];//{
            //     "bin": ahData.auctions[j].bin,
            //     "item_name":ahData.auctions[j].item_name,
            //     "starting_bid": ahData.auctions[j].starting_bid
            //  };
             AHArray[index] =body;
             index++;
        }
        //window.alert(ahData.page);
    }
    return AHArray;
}
async function newFormatAHData() {//doesn't work
    var AHArray = new Array();
    var index = 0;
    var ahData = getApiCall('https://api.hypixel.net/skyblock/auctions?page=0');
    for (var i = 0; i<ahData.totalPages; i++) {
        var ahData = getApiCall('https://api.hypixel.net/skyblock/auctions?page='+i);
        AHArray = AHArray.concat(ahData.auctions);
        //window.alert(ahData.page);
    }
    return AHArray;
}
// newFormatAHData().then(
//     function(value) {aHData=value}
// );
function search_proto(ahData) {

    var lowestBid = 9999999999999999999;
    var ahData = getApiCall('https://api.hypixel.net/skyblock/auctions?page=0');
    for (var i = 0; i<ahData.totalPages; i++) {
        var ahData = getApiCall('https://api.hypixel.net/skyblock/auctions?page='+i);
        for(var j = 0; j<ahData.auctions.length;j++){
            //  if (ahData.auctions[j].bin && ahData.auctions[j].item_name =="Pigman Sword"){ //&& (ahData.auctions[i].item_name == "Pigman Sword")
            // itemString = itemString+ahData.auctions[j].item_name+": "+ahData.auctions[j].starting_bid+"\n";
            // }
            if (ahData.auctions[j].starting_bid<lowestBid && ahData.auctions[j].bin&& (ahData.auctions[j].item_name == "Pigman Sword")) {
                lowestBid = ahData.auctions[j].starting_bid;
            }
        }
        //window.alert(ahData.page);
    }
    return lowestBid;
}

//still need search functionality
function search(ahData, searchTerm) {
    var lowestBid = 9999999999999999999;
    var auctionUUID = "";
    for (var i = 0; i<ahData.length; i++) {
            //  if (ahData.auctions[j].bin && ahData.auctions[j].item_name =="Pigman Sword"){ //&& (ahData.auctions[i].item_name == "Pigman Sword")
            // itemString = itemString+ahData.auctions[j].item_name+": "+ahData.auctions[j].starting_bid+"\n";
            // }
            var itemName = ahData[i].item_name.toUpperCase().replaceAll(" ", "_");
            if (ahData[i].starting_bid<lowestBid && ahData[i].bin&& (itemName.includes(searchTerm))) {
                lowestBid = ahData[i].starting_bid;
                auctionUUID = ahData[i].item_uuid;
            }
        //window.alert(ahData.page);
    }
    return lowestBid;
}
function fast_search(ahData, searchTerm) {
    //.find or .filter
   const searchItems = ahData.filter(auction => auction.item_name.toUpperCase().replaceAll(" ", "_").includes(searchTerm) );
   return searchItems;
}
/*
    fUNCTION FOR TESTING THINGS
*/
function testFunct() {
    window.alert("HI");
    makeCraftRecepies();
}
 
 
function main() {


   // const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');

    //let list = document.getElementById("bazaarList");
    //let craftItems = Object.keys(craftRecipies);
 
}
main();
function getOnlineStatus() {
    var onlineStatus = getApiCall('https://api.hypixel.net/status?uuid=fcb8d36372294b70b98a746d9161f4c8');//f4343fa3ec3c42c9a7229488dc029e55 
    if(onlineStatus.session.online) {
        document.getElementById("status-display").innerHTML = "YES!!!!!!!!!!";
    }else{
        document.getElementById("status-display").innerHTML = "NO!!!!!!!!!!!";
    }
}
function getMyStatus() {
    var onlineStatus = getApiCall('https://api.hypixel.net/status?uuid=f4343fa3ec3c42c9a7229488dc029e55');
    document.getElementById("my-status").innerHTML = JSON.stringify(onlineStatus);
}
function search_bar() {
    let searchInput = document.getElementById('searchInput').value;
    searchInput = searchInput.toUpperCase().replaceAll(" ", "_");
    document.getElementById("error").innerHTML = searchInput
    if (Object.keys(craftRecipies).includes(searchInput)) {
        const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');
        document.getElementById("error").innerHTML = JSON.stringify(getCraftPrices(bazaarData.products, craftRecipies[searchInput], searchInput));
        
        // if(aHData.includes(new Object({"item_name":searchInput}))) {
        //     document.getElementById("error").innerHTML =  JSON.stringify(getAhPrices(bazaarData.products, craftRecipies[searchInput], searchInput));
        // }else{     
    }
}
function getBestMM() {
    const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');
    var greatMargin;
    var craftItems = Object.keys(craftRecipies);
    for( var i = 0; i<craftItems.length; i++) {
        var craftInfo = getCraftPrices(bazaarData.products, craftRecipies[craftItems[i]], craftItems[i]);
        if(!greatMargin) {
            greatMargin = craftInfo;
        }
        if((craftInfo.margin_per > greatMargin)) {
            greatMargin = craftInfo.margin_per;
        }
        
    } 
    document.getElementById("best-mm").innerHTML = JSON.stringify(greatMargin);
}
function reloadAh() {
    aHData = formatAHData();
}


// 


// searchInput.addEventListener("keyup", (event) => {
//     const { value } = event.target;

//     // get user search input and turn it to preferred string
//     const searchQuery = value.toUpperCase();
//     document.getElementById("error").innerHTML = searchQuery;
//     // try {
        
//     // } catch (err) {
//     //     document.getElementById("error").innerHTML = err.message;
//     // }
   

// })
