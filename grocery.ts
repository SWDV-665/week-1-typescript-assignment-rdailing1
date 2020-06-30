
// Simple class to define grocery items
class Grocery {
    constructor(public name: string,
                public quantity: number,
                public packaging: string) {
    }
}

function init() {
    // Create the array of groceries
    let groceryList = [new Grocery("Ovaltine", 1, "bottle"),
                       new Grocery("OJ", 1, "gallon"),
                       new Grocery("Milk", 2, "gallons"),
                       new Grocery("Tea", 6, "boxes"),
                       new Grocery("Eggs", 6, "cartons"),
                       new Grocery("Bread", 1, "loaf")]

    // Loop through the array and add the data to the html
    groceryList.forEach(function(item){
        document.body.innerHTML += item.name + ": " + String(item.quantity) + " " + item.packaging + "<br>";
    });
}
