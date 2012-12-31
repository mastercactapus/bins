/**
 * A single drawer inside a cabinet, can have different sizes, and multiple slots (collection of components)
 * @namespace bins
 * @class Drawer
 * @constructor
 * @extends {Backbone.Model}
 */
bins.Drawer = Backbone.Model.extend({
  defaults: {
    
    /**
     * An image/icon to display for this drawer
     * @property {String} image
     */
    image: null,

    /**
     * The width multiplier of the drawer, in relation to other drawers on it's [top] row
     * if a row has 3 drawers, and this is set to 2, this drawer will take up half the row
     * @property {Number} width
     */
    width: 1,

    /**
     * The number of rows this drawer occupies
     * @property {Number} height
     */
    height: 1
  }
});
