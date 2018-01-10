requirejs.config({
    'baseUrl': '//cdn.vidb.me/js',
    'paths': {
      'jquery': ['//cdn.vidb.me/js/jquery','https://code.jquery.com/jquery-3.2.1.min.js'],
      'popper': ['//cdn.vidb.me/js/popper','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'],
      'app': ['//cdn.vidb.me/js/app'],
      'bootstrap': ['//cdn.vidb.me/js/bootstrap.min','https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js']
    },
    'shim': {
        'bootstrap': {
        	'deps': ['jquery','popper'],
        	'exports': '$'
        	 },
        'main': { 'deps': ['jquery','bootstrap'] }
    }
});
 
require(['popper'],function(p){
  window.Popper = p;
  require(['app'],function(app){
    window.mainApp = app;
  });
});