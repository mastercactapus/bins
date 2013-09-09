var _ = require("lodash");
var dust = require("dustjs-linkedin");
var glob = require("glob");
var Q = require("q");
var fs = require("graceful-fs");
var path = require("path");

var readFile = Q.nbind(fs.readFile);
var qGlob = Q.nbind(glob);

var Loader = function(dir, options){
	_.bindAll(this);
	this.options = _.defaults(options||{}, Loader.defaults);
	this.dir = dir;
	this.files = path.join(this.dir,"**/*.dust");
};
Loader.defaults = {
	cache: true
};

_.extend(Loader.prototype,{
	init: function(){
		return this._getAll();
	},
	allMiddleware: function(req,res){
		this._getAll()
		.then(function(templateData){
			res.set("content-type","application/javascript");
			res.send(200,templateData);
		})
		.done();
	},
	_processDustFile: function(filePath){
		var name = path.relative(this.dir,filePath).replace(/\.dust$/,"");
		return readFile(filePath)
		.then(function(fileData){
			var tmpl = dust.compile(fileData.toString(),name);
			dust.loadSource(tmpl);
			return tmpl;
		});
	},
	_getAll: function(){
		if (this.options.cache && this._templateData) {
			return Q(this._templateData);
		} else {
			return qGlob(this.files)
			.then(function(dustFiles){
				return dustFiles.map(this._processDustFile);
			}.bind(this))
			.all()
			.then(function(compiledData){
				this._templateData = compiledData.join("\n");
				return this._templateData;
			}.bind(this))
		}
	}
});

module.exports = exports = Loader;
