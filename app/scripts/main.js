
window.bins = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    test();
    console.log('made that shit');
  }
};

$(document).ready(function(){
  bins.init();
});


function test(){
  var drawers = new bins.Collections.cabinetDrawers;
  drawers.add(_.map(_.range(25),function(i){
    new bins.Models.Drawer
  }));
  var cab = new bins.Models.Cabinet({"drawers": drawers});

  var cabV = new bins.Views.cabinetView({
    el: $("#test"),
    model: cab
  });

  cabV.render();
}