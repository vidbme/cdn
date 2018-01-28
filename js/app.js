requirejs.config({
	baseUrl: ".",
	paths: {
		jquery: "https://code.jquery.com/jquery-3.3.1.min",
		popper: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min",
		bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min",
		fontawesome: "https://use.fontawesome.com/releases/v5.0.6/js/all",
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