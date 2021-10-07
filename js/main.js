function sitePrompt() {
    let numHotdogs = prompt("How many hotdogs do you want?", "");
    let numFries = prompt("How many fries do you want?", "");
    let numDrinks = prompt("How many drinks do you want?", "");
    let initPrice = (numHotdogs*3.75) + (numFries*2) + (numDrinks*1.5);

    let discountTotal = 0;
    let finalPrice = 0;
    if (initPrice >= 20) {
        discountTotal = Math.round(initPrice*0.1 * 100) / 100;
        taxTotal = Math.round(initPrice*0.9*0.0625 * 100) / 100;
        finalPrice = Math.round(initPrice*0.9*1.0625 * 100) / 100;
    }
    else {
        taxTotal = Math.round(initPrice*0.0625 * 100) / 100;
        finalPrice = Math.round(initPrice*1.0625 * 100) / 100;
    }

    document.getElementById("countHotdog").innerHTML = "Hotdogs: " + numHotdogs;
    document.getElementById("countFries").innerHTML = "Fries: " + numFries;
    document.getElementById("countDrinks").innerHTML = "Drinks: " + numDrinks;
    document.getElementById("subtotal").innerHTML = "$" + initPrice;
    document.getElementById("discount").innerHTML = "$" + discountTotal;
    document.getElementById("tax").innerHTML = "$" + taxTotal;
    document.getElementById("total").innerHTML = "$" + finalPrice;
};
