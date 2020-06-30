// Simple class to define grocery items
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, packaging) {
        this.name = name;
        this.quantity = quantity;
        this.packaging = packaging;
    }
    return Grocery;
}());
function init() {
    // Create the array of groceries
    var groceryList = [new Grocery("Ovaltine", 1, "bottle"),
        new Grocery("OJ", 1, "gallon"),
        new Grocery("Milk", 2, "gallons"),
        new Grocery("Tea", 6, "boxes"),
        new Grocery("Eggs", 6, "cartons"),
        new Grocery("Bread", 1, "loaf")];
    // Loop through the array and add the data to the html
    groceryList.forEach(function (item) {
        document.body.innerHTML += item.name + ": " + String(item.quantity) + " " + item.packaging + "<br>";
    });
}
