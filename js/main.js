$(function(){
	$('.menu_icon').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('active');
		$('.menu').toggleClass('visible');
	});
});
