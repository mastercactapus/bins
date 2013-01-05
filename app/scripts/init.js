
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
function test(){
  var drawers = new bins.Collections.cabinetDrawers;
  drawers.add(_.map(_.range(20),function(i){
    return new bins.Models.Drawer;
  }));
  cab = new bins.Models.Cabinet({"drawers": drawers});

  var cabV = new bins.Views.cabinetView({
    el: $("#test"),
    model: cab
  });

  cabV.render();
}