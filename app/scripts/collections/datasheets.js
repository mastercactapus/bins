/**
 * The collection of all datasheets
 * @constructor
 * @extends {Backbone.Collection}
 * @module bins
 * @submodule Collections
 * @class  Datasheets
 * @namespace bins.Collections
 */
bins.Collections.Datasheets = Backbone.Collection.extend({
  defaults: {model: bins.Datasheet}
});
