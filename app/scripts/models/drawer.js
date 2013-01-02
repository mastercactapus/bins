/**
 * A single drawer inside a cabinet, can have different sizes
 * @namespace bins.Models
 * @class Drawer
 * @constructor
 * @extends {Backbone.Model}
 */
bins.Models.Drawer = Backbone.Model.extend({
  defaults: {
    
    /**
     * An image/icon to display for this drawer
     * @property {String} image
     */
    image: null,

    /**
     * The width of the drawer face in cm (for labels -- future release)
     * @property {Number} labelWidth
     */
    labelWidth:5,

    /**
     * The height of the drawer face in cm (for labels -- future release)
     * @property {Number} labelHeight
     */
    labelHeight:2,

    /**
     * A name or label for this drawer
     * @property {String} label
     */
    label: null,

    /**
     * Weather this drawer is currently selected or not
     * @property {String} selected
     */
    selected: false,

    /**
     * Indicates a count for this drawer (e.g. required number or stock count)
     * @property {Number} count
     */
    count: -1
  }
});
