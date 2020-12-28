$(function () {
	$('[data-toggle="tooltip"]').tooltip();

	$("#email").click(function(){
		alert("El correo fue enviado correctamente...");
	})

	$("#pasos").dblclick(function(){
		$(this).css("color", "red");
	});
	
	$("#pasos2").dblclick(function(){
		$(this).css("color", "red");
	});
	
	$(".card-title").click(function(){
		$(".card-text").toggle();
	});
});
