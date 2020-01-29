'use strict';

const imported = require("./inventory.js");

const compositions = {foundation: [], protein: [], extra: [], dressing: []};

for (let item in imported.inventory) {
    let itemCategories = Object.keys(imported.inventory[item]);
    let belongsTo = isCategory(itemCategories, Object.keys(compositions))
    compositions[belongsTo].push(item)
}
console.log("Foundations: " + compositions["foundation"].toString());
console.log("Proteins: " + compositions["protein"].toString());
console.log("Extras: " + compositions["extra"].toString());
console.log("Dressing: " + compositions["dressing"].toString());


function isCategory(item, categories){
    for (var category in categories){
        if(item.indexOf(categories[category]) > -1) {
            return categories[category]           
        }
    }
}

class Salad{
    foundation = "";
    protein = "";
    extra = "";
    dressing = "";

    removeSelection(item){
        if(item == "foundation"){
            this.foundations = "";
        }
        if(item == "protein"){
            this.protein = "";
        }
        if(item == "extra"){
            this.extra = "";
        }
        if(item == "dressing"){
            this.dressing = "";
        }
    }
    addSelection(item){
        for(let category in compositions){
            if (compositions[category].indexOf(item) >= 0) {
                if(category == "foundation"){
                    this.foundation = item;
                }
                if(category == "protein"){
                    this.protein = item;
                }
                if(category == "extra"){
                    this.extra = item;
                }
                if(category == "dressing"){
                    this.dressing = item;
                }
            }
        }
    }
    price(){
        let reducer = (accumulator, currentValue) =>  accumulator + currentValue;
        let ingredientsCost = [imported.inventory[this.foundation].price, 
        imported.inventory[this.protein].price, 
        imported.inventory[this.extra].price, 
        imported.inventory[this.dressing].price];
        return ingredientsCost.reduce(reducer, 0);
    }
    toString(){

        return 'Foundation: ' + this.foundation + '\nProtein: ' + this.protein + '\nExtras: ' + this.extra + '\nDressing: ' + this.dressing;
    }
}

//mySalad -> 
class ExtraGreenSalad extends Salad{
    price(){
        let reducer = (accumulator, currentValue) =>  accumulator + currentValue;
        let ingredientsCost = [imported.inventory[this.foundation].price*1.3, 
        imported.inventory[this.protein].price*0.5, 
        imported.inventory[this.extra].price*0.5, 
        imported.inventory[this.dressing].price*0.5];
        return ingredientsCost.reduce(reducer, 0);
    }
}

class GourmetSalad extends Salad{
    price(){
        let reducer = (accumulator, currentValue) =>  accumulator + currentValue;
        let ingredientsCost = [imported.inventory[this.foundation].price*1.3, 
        imported.inventory[this.protein].price*0.5, 
        imported.inventory[this.extra].price*0.5, 
        imported.inventory[this.dressing].price*0.5];
        return ingredientsCost.reduce(reducer, 0);
    }
}

let myCaesarSalad = new ExtraGreenSalad();
myCaesarSalad.addSelection("Sallad");
myCaesarSalad.addSelection('Pulled beef från Sverige');
myCaesarSalad.addSelection("Cashewnötter");
myCaesarSalad.addSelection("Honungsdijon");
console.log(myCaesarSalad.price())
let mySalad = new ExtraGreenSalad();


