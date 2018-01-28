requirejs.config({
	baseUrl: ".",
	paths: {
		jquery: "//cdn.vidb.me/js/jquery-3.3.1.min",
		popper: "//cdn.vidb.me/js/popper.min",
		bootstrap: "//cdn.vidb.me/js/bootstrap.bundle.min",
		fontawesome: "//cdn.vidb.me/js/fa-solid.min",
		recaptcha: "https://www.google.com/recaptcha/api"
	},
	shim : {
		bootstrap: ["jquery"]
	},
	waitSeconds: 15
});
require(["jquery"], function($) {
	$(".preload").fadeOut("slow");
	require(["bootstrap"], function(bootstrap) {
		$('[data-toggle="tooltip"]').tooltip();
		$('#pop-login').on('shown.bs.modal', function (e) {
		});
	});
});
require(["fontawesome"],function(fontawesome){
	window.Fontawesome = fontawesome;
});