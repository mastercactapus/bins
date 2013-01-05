Backbone.Model.prototype.toJSON = function() {
  var clone = _.clone(this.attributes);
  for (var attr in clone) {
    if (clone[attr] && clone[attr]["toJSON"]) {
      clone[attr] = this.attributes[attr].toJSON();
    }
  }
  return clone;
};

Backbone.Model.prototype.toJSON = function() {
  var clone = _.clone(this.attributes);
  for (var attr in clone) {
    if (this.attributes[attr] && this.attributes[attr]["toJSON"]) {
      var tmp = this.attributes[attr].toJSON();
      clone[attr] = tmp;
    }
  }
  return clone;
};

$(document).ready(function(){
  bins.init();
});


