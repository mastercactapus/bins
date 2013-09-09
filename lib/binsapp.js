var mongo = require('mongodb');
var Q = require("q");
var _ = require("lodash");
var quote = require("regexp-quote");

var dbClient = Q.nbind(mongo.MongoClient.connect);

var bins = function(app){
	_.bindAll(this);
	this.app = app;
	this.db = dbClient("mongodb://127.0.0.1:27017/bins");
	this.routes(this.app);
};

_.extend(bins.prototype,{
	components: function(){
		return this._components = this._components||this.db
		.invoke("collection","components") //db.collection.components
	},
	routes: function(app) {
		app.post("/search", this._doSearch);
		app.post("/components", this._updateComponent);
		app.put("/components/:id", this._updateComponent);
		app.get("/components/:id", this._getComponent);
	},

	_doSearch: function(req,res){
		var params = req.body.tags.split(" ");

		var rx = new RegExp("\\b" + params.map(quote).join("\\b|\\b")+ "\\b","i");
		this.components()
		.invoke("find",{
			$or: [
				{title: {$regex: rx}},
				{type: {$regex: rx}},
				{tags: {
					$all: params
				}}
			]
		})
		.ninvoke("toArray")
		.then(function(results){
			res.json(results);
		})
		.done();
	},
	_updateComponent: function(req,res){
		this.components()
		.ninvoke("save",req.body)
		.then(function(result){
			console.log(result);
			res.json(result[0]||result);
		})
		.done();
	},
	_getComponent: function(req,res){
		this.components()
		.invoke("find",{
			_id: req.params.id
		})
		.ninvoke("toArray")
		.then(function(results){
			res.json(results[0]);
		})
		.done();
	}

});

module.exports = bins;
