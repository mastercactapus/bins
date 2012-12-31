/**
 * Collection of all components
 * @namespace bins
 * @class componentDB
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.componentDB = Backbone.Collection.extend({
  defaults: {
    model: bins.component
  }
});
