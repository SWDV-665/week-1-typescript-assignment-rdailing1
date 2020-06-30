var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, medium) {
        this.name = name;
        this.quantity = quantity;
        this.medium = medium;
    }
    return Grocery;
}());
function init() {
    var groceryList = [new Grocery("Ovaltine", 1, "bottle"),
        new Grocery("OJ", 1, "gallon"),
        new Grocery("Milk", 2, "gallons"),
        new Grocery("Tea", 6, "boxes"),
        new Grocery("Eggs", 6, "cartons"),
        new Grocery("Bread", 1, "loaf")];
    groceryList.forEach(function (item) {
        document.body.innerHTML += item.name + ": " + String(item.quantity) + " " + item.medium + "<br>";
    });
}
