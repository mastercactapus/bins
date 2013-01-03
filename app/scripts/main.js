Backbone.Model.prototype.toJSON = function() {
  var clone = _.clone(this.attributes);
  for (var attr in clone) {
    if (clone[attr] && clone[attr]["toJSON"]) {
      clone[attr] = this.attributes[attr].toJSON();
    }
  }
  return clone;
};

window.bins = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    test();
    console.log('test mode launched');
  }
};

$(document).ready(function(){
  bins.init();
});


function test(){
  var drawers = new bins.Collections.cabinetDrawers;
  drawers.add(_.map(_.range(25),function(i){
    return new bins.Models.Drawer;
  }));
  cab = new bins.Models.Cabinet({"drawers": drawers});

  var cabV = new bins.Views.cabinetView({
    el: $("#test"),
    model: cab
  });

  cabV.render();
}