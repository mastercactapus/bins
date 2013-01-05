/**
 * Collection of all components
 * @namespace bins.Collections
 * @class Components
 * @module bins
 * @submodule Collections
 * @constructor
 * @extends {Backbone.Collection}
 */
bins.Collections.Components = Backbone.Collection.extend({
  defaults: {
    model: bins.component
  }
});
