var express = require("express");
var http = require("http");
var dust = require("dustjs-linkedin");

var DustLoader = require("./lib/dust-loader.js")
var Bins = require("./lib/binsapp");

var app = express();

app.configure(function(){
	app.use(express.bodyParser());
});

var server = http.createServer(app);
var dustLoader = new DustLoader("public/dust",{cache:false});
dustLoader.init();

app.use("/public", express.static("public"));
app.get("/public/dust-templates.js",dustLoader.allMiddleware);

var mainCtx = dust.makeBase({
	public: "/public",
	dataMain: "js/main",
	requirejs: "vendor/js/require.js",
	scripts: [
		"vendor/js/jquery-2.0.3.js",
		"vendor/js/dust-core-2.0.3.js",
		"vendor/js/lodash.js",
		"vendor/js/backbone.js",
		"vendor/js/less-1.4.2.js",
		"vendor/js/q.js",
		"dust-templates.js"
	],
	styles: [
		{path:"css/main.less",type:"text/less"}
	]
})


app.get("/",function(req,res){
	dustLoader.init().then(function(){
		dust.stream("main",mainCtx).pipe(res);
	})
});

var bins = new Bins(app);



server.listen(8888);
console.log("Listening: http://127.0.0.1:"
	+ server.address().port + "/");
