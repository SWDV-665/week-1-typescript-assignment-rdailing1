
class Grocery {
    constructor(public name: string,
                public quantity: number,
                public medium: string) {
    }
}

function init() {
    let groceryList = [new Grocery("Ovaltine", 1, "bottle"),
                       new Grocery("OJ", 1, "gallon"),
                       new Grocery("Milk", 2, "gallons"),
                       new Grocery("Tea", 6, "boxes"),
                       new Grocery("Eggs", 6, "cartons"),
                       new Grocery("Bread", 1, "loaf")]

    groceryList.forEach(function(item){
        document.body.innerHTML += item.name + ": " + String(item.quantity) + " " + item.medium + "<br>";
    });
}
