/**
 * Collection of all components
 * @namespace bins.Collections
 * @class componentDB
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.Collections.componentDB = Backbone.Collection.extend({
  defaults: {
    model: bins.component
  }
});
