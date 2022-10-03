//implementing strategy before classes in js ES5
var Greeter = function (strategy) {
  this.strategy = strategy;
};
Greeter.prototype.greet = function () {
  return this.strategy();
};

var politeGreetingStrategy = function () {
  console.log("Сәлем");
};

var friendlyGreetingStrategy = function () {
  console.log("Ооо қалайсың!");
};

var menGreetingStrategy = function () {
  console.log("Ассалаумағалейкум");
};

var politeGreeter = new Greeter(politeGreetingStrategy);
var friendlyGreeter = new Greeter(friendlyGreetingStrategy);
var boredGreeter = new Greeter(menGreetingStrategy);

politeGreeter.greet();
friendlyGreeter.greet();
boredGreeter.greet();
