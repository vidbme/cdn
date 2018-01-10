requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery": "jquery",
      "popper": "popper",
      "app": "app",
      "bootstrap": "bootstrap.min"
    },
    "shim": {
        "bootstrap": {
        	"deps": ["jquery","popper"],
			"exports": "$"
        	 },
        "main": { "deps": ["jquery","bootstrap"] }
    }
});
 
require(["popper"],function(p){
  window.Popper = p;
  require(["app/main"],function(app){
    window.mainApp = app;
  });
});