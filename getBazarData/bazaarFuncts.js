/*
Things to do: 
 - make craftRecepies have all recipies from each recipe JSON 
 - find a better way to structure the crafting recipies and flips (DONE)
 - Sort the arrays to show which makes the most money at the top (make this a switch)
 - Make a way to easily have statistics for 2 step crafting( Then 3 step and above)
 - get reading and writing to files working
 - allow to make and store crafting recipies on the application
*/

//const bazaarLink = 'https://api.hypixel.net/skyblock/bazaar';
//const fs = require('fs')

//margin profit/Buy snd sell profit/Flipped profit
// Items that can be flipped for money but cannot be crafted
const flipItems = {
    "farmingFlip":[
        "FERMENTO"
    

    ],
    "miningFlip":[
        "SYNTHETIC_HEART",
        "SUPERLITE_MOTOR",
        "CONTROL_SWITCH",
        "ELECTRON_TRANSMITTER",
        "FTX_3070",
        "ROBOTRON_REFLECTOR",
        "CORLEONITE",
        "DIVAN_FRAGMENT",
        "BOB_OMB",
        "JUNGLE_KEY",
        "SLUDGE_JUICE",
        "YOGGIE"

    ],
    "combatFlip":[

    ],
    "woodFlip":[

    ],
    "fishingFlip":[
        "CHUM",
        "GLOWING_MUSHROOM"

    ],
    "odditiesFlip":[
        "NECROMANCER_BROOCH",
        "PROTECTOR_FRAGMENT",
        "OLD_FRAGMENT",
        "UNSTABLE_FRAGMENT",
        "WISE_FRAGMENT",
        "YOUNG_FRAGMENT",
        "STRONG_FRAGMENT",
        "SUPERIOR_FRAGMENT",
        "HOLY_FRAGMENT",
        "STOCK_OF_STONKS",
        "THE_ART_OF_WAR"
    ]
};

//Craft recipies for profit and used for flipped (May neeed to change)

const craftRecipies = {
    "farmingRecipies":{
        "CONDENSED_FERMENTO":{"FERMENTO":9},
        "ENCHANTED_GRILLED_PORK":{"ENCHANTED_PORK":160}
    },
    "miningRecipies":{
        "FINE_JASPER_GEM":{"FLAWED_JASPER_GEM":80},
        "FINE_AMBER_GEM":{"FLAWED_AMBER_GEM":80},
        "FINE_AMETHYST_GEM":{"FLAWED_AMETHYST_GEM":80},
        "FINE_TOPAZ_GEM":{"FLAWED_TOPAZ_GEM":80},
        "FLAWLESS_AMBER_GEM":{"FLAWED_AMBER_GEM":6400},
        "ENCHANTED_LAVA_BUCKET":{"ENCHANTED_COAL_BLOCK":2,"ENCHANTED_IRON":3},
        "SUPER_COMPACTOR_3000":{"ENCHANTED_COBBLESTONE":448, "ENCHANTED_REDSTONE_BLOCK":1}
    },
    "combatRecipies":{

    },
    "woodRecipies":{

    },
    "fishingRecipies":{
        "FULL_CHUM_BUCKET":{"CHUM":10, "EMPTY_CHUM_BUCKET":1},
        "EMPTY_CHUM_BUCKET":{"GLOWING_MUSHROOM": 8, "COIN":2000},
        "SPOOKY_WATER_ORB":{"WATER_ORB":1,"PURPLE_CANDY":64, "WEREWOLF_SKIN":24, "SOUL_FRAGMENT":1},
        "SHARK_WATER_ORB":{"WATER_ORB":1, "ENCHANTED_SHARK_FIN": 12,"BLUE_SHARK_TOOTH":8, "TIGER_SHARK_TOOTH":4, "NURSE_SHARK_TOOTH":16, "GREAT_WHITE_SHARK_TOOTH":1 },
        'WINTER_WATER_ORB':{"WATER_ORB":1, "ICE_HUNK":128, "ENCHANTED_SNOW_BLOCK": 64, "BLUE_ICE_HUNK":32,"WHITE_GIFT":64, "GREEN_GIFT":16 },
        'WATER_ORB':{"ENCHANTED_RAW_FISH":16, "ENCHANTED_WATER_LILY":8, "ENCHANTED_RAW_SALMON":16, "ENCHANTED_PRISMARINE_SHARD":16, "DIVER_FRAGMENT":1, "ENCHANTED_PRISMARINE_CRYSTALS":16, "ENCHANTED_SPONGE":4, "ENCHANTED_PUFFERFISH":16, "ENCHANTED_CLOWNFISH":8}

    },
    "odditiesRecipies":{
        "HOT_POTATO_BOOK":{"SUGAR_CANE":3, "ENCHANTED_BAKED_POTATO":1},
        "ENCHANTMENT_PRISTINE_1":{"FINE_TOPAZ_GEM":40,"SUGAR_CANE":21},
        "ENCHANTMENT_PRISTINE_2":{"FINE_TOPAZ_GEM":80,"SUGAR_CANE":42},
        "ENCHANTMENT_PRISTINE_3":{"FINE_TOPAZ_GEM":160,"SUGAR_CANE":84},
        "ENCHANTMENT_PRISTINE_4":{"FINE_TOPAZ_GEM":320,"SUGAR_CANE":168},
        "HOT_POTATO_BOOK":{"SUGAR_CANE":3, "ENCHANTED_BAKED_POTATO":1},
        "ENCHANTMENT_ULTIMATE_BOBBIN_TIME_3":{"SPOOKY_WATER_ORB":1, "SHARK_WATER_ORB":1, "WINTER_WATER_ORB":1, "LAVA_WATER_ORB":1, "BOBBIN_SCRIPTURES":1},
        "ACACIA_BIRDHOUSE":{"ENCHANTED_ACACIA_LOG":384}
    }
};

// "THE_ART_OF_WAR":{"ENCHANTED_GRILLED_PORK":2, "COIN":7500000}, Gone because only available for 4 year anniversary
// "ENCHANTMENT_PRISTINE_5":{"FINE_TOPAZ_GEM":640,"SUGAR_CANE":336},

// function makeHomeData() {
//     let homeData = {};
//     for (theme of craftRecipies) {
//         for(var i = 0; i < ) {
//            if ()
//         }
//     }
// }
//"PIGMAN_SWORD":{"ENCHANTED_GRILLED_PORK":48},
var reader;
// var realresult = [];
// const file = new File(realresult, "craftRecipies.txt");
function checkFileAPI() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        reader = new FileReader();
        return true; 
    } else {
        alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
}
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

/**
 * read text input
 */
function readText(filePath) {
    var output = ""; //placeholder for text output
    if(filePath) {     
           
        reader.onload = function (e) {
            output = e.target.result;
            displayContents(output);
        };//end onload()
        reader.readAsText(filePath.files[0]);   
        
    }//end if html5 filelist support
    else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }       
    return true;
}   

/**
 * display content using a basic HTML replacement
 */
function displayContents(txt) {
window.alert(txt);
//     var el = document.getElementById('main'); 
//     el.innerHTML = txt; //display output in DOM
}  


function testFunct() {
    // const bazaarData = getApiCall('https://api.hypixel.net/skyblock/bazaar');
    // window.alert(JSON.stringify(bazaarData.products.FERMENTO.buy_summary[0].pricePerUnit));

}

const auctionItems = [
    "PIGMAN_SWORD"];
var aHData;

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
    try{
        return item.sell_summary[0].pricePerUnit;
    }catch(e) {
        console.log(item);
        return NaN
    }
  }
  function getSellOrder(item) {
    try {
        return item.buy_summary[0].pricePerUnit;
    }catch(e) {
        console.log(item);
        return NaN
    }
  }
  function getInstaBuy(item) {
    try {
        return item.buy_summary[0].pricePerUnit;
    }catch(e) {
        console.log(item);
        return NaN
    }
  }
  function getInstaSell(item) {
    try {
        return item.sell_summary[0].pricePerUnit;
    }catch(e) {
        console.log(item);
        return NaN
    }
  }

  function getTotalBuyOrder(products, componentOb) {
    var sum = 0
    var keyArray = Object.keys(componentOb);
    for(item of keyArray) {
        if (item == "COIN") {
            sum = sum + componentOb[item];
        }else {
            sum = sum + getBuyOrder(products[item])*componentOb[item];
        }
    }
    return sum;
  }

  function getTotalInstaBuy(products, componentOb) {
    var sum = 0
    var keyArray = Object.keys(componentOb);
    for(item of keyArray) {
        if (item == "COIN") {
            sum = sum + componentOb[item];
        }else {
            sum = sum + getInstaBuy(products[item])*componentOb[item];
        }
    }
    return sum;
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
function formatInfo(craftedItem, buyOrderPrice, sellOrderPrice,instaBuyPrice, craftedInstaSell,products ) {
    return {"item_name":craftedItem, 
    "buy_order_price": buyOrderPrice, 
    "insta_buy_price":instaBuyPrice,
    "sell_order_price":sellOrderPrice, 
    "insta_sell_price":craftedInstaSell, 
    "buy_volume":products[craftedItem].quick_status.buyVolume,
    "sell_volume":products[craftedItem].quick_status.sellVolume,
    "best_net_gain":sellOrderPrice-buyOrderPrice,
    "margin_per": 100*((sellOrderPrice-buyOrderPrice)/sellOrderPrice)
    };
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

    return formatInfo(craftedItem, buyOrderPrice, craftedSellOrder,instaBuyPrice,  craftedInstaSell,products );
    }

 }
 function getBuyAndSellPrices(products, item) {
    var buyOrderPrice =getBuyOrder(products[item]);
    var sellOrderPrice = getSellOrder(products[item]);
    var instaBuyPrice = getInstaBuy(products[item]);
    var instaSellPrice = getInstaSell(products[item]);


    return formatInfo(item, buyOrderPrice, sellOrderPrice,  instaBuyPrice, instaSellPrice, products);

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

function getCharlesOnlineStatus() {
    var onlineStatus = getApiCall('https://api.hypixel.net/status?uuid=10c84c46f4834c1082b56c5b6fb96d1e');//f4343fa3ec3c42c9a7229488dc029e55 
    if(onlineStatus.session.online) {
        document.getElementById("statusdisplay").innerHTML = "YES!!!!!!!!!!";
    }else{
        document.getElementById("statusdisplay").innerHTML = "NO!!!!!!!!!!!";
    }
}
function getMyStatus() {
    var onlineStatus = getApiCall('https://api.hypixel.net/status?uuid=f4343fa3ec3c42c9a7229488dc029e55');
    document.getElementById("my-status").innerHTML = JSON.stringify(onlineStatus);
}
//Need to change with the new structure of craft recipies
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
