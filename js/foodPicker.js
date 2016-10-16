var app = app || {};

(function(){
  app.FoodPicker = function() {

    var self = this;

    //helpers
    var calcTotalPrice = function() {
      return self.orderedFood().reduce(function(total, food) { return total + food.price; }, 0);
    }

    self.foodMenu = ko.observableArray([{
      name: 'Shrimp',
      price: 60.00,
      ordered: ko.observable(false) 
    }, {
      name: 'Hamburger',
      price: 20.00,
      ordered: ko.observable(false) 
    }, {
      name: 'Potato',
      price: 15.00,
      ordered: ko.observable(false) 
    }]);

    self.foodName = ko.observable();
    self.foodPrice = ko.observable();

    self.addFood = function(){
      self.foodMenu.push({ name: self.foodName(), 
        price: parseFloat(self.foodPrice()),
        ordered: ko.observable(false) });
      self.foodName('');
      self.foodPrice('');
    };

    self.orderedFood = ko.computed(function() {
      return self.foodMenu().filter(function(el) { return el.ordered(); })
    });

    self.orderPlaced = ko.computed(function() {
      return self.orderedFood() && self.orderedFood().length > 0;
    });

    self.totalPrice = ko.computed(function() {
      return (self.orderPlaced())? calcTotalPrice() : 0.00;
    });
 
  }
})();