var app = app || {};

document.addEventListener("DOMContentLoaded", function(event) {
  for (module in app) {
    ko.applyBindings(new app[module]());
  };
});