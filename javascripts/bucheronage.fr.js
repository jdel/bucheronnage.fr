$(document).ready(function () {
	$.localScroll();
	/*
	if (!Modernizr.svg) {
  		$(".logo").css("background-image", "url(img/logo.png)");
	}
	*/
    var url=document.URL.split('#')[1];
    if(url == undefined){
        url = '';
    }
});

$(document).scroll(function(e){
		var scrollAmount = $(window).scrollTop();
    var screen01height = $('#bois').height() - 60;
    var screen02height = $('#bois').height() + $('#bois').height() - 60;
    var screen03height = $('#bois').height() + $('#bois').height() + $('#exploitation').height() - 60;
    var screen04height = $('#bois').height() + $('#bois').height() + $('#exploitation').height() + $('#travaux').height() - 60;
    var screen05height = $('#bois').height() + $('#bois').height() + $('#exploitation').height() + $('#travaux').height() + $('#photos').height() - 60;
    var screen06height = $('#bois').height() + $('#bois').height() + $('#exploitation').height() + $('#travaux').height() + $('#photos').height() + $('#contact').height() - 60;
    var screen07height = $('#bois').height() + $('#bois').height() + $('#exploitation').height() + $('#travaux').height() + $('#photos').height() + $('#contact').height() - 60;

    if(scrollAmount < screen01height) {
    $('.topmenu').css({ 'background-color' : '#eee'});
}
    if(scrollAmount > screen01height && scrollAmount < screen03height) {
    $('.topmenu').css({ 'background-color' : '#fff'});
}
  if(scrollAmount > screen02height && scrollAmount < screen03height) {
    $('.topmenu').css({ 'background-color' : '#eee'});
}
  if(scrollAmount > screen03height && scrollAmount < screen04height) {
    $('.topmenu').css({ 'background-color' : '#fff'});
}
  if(scrollAmount > screen04height && scrollAmount < screen05height) {
    $('.topmenu').css({ 'background-color' : '#fff'});
}
  if(scrollAmount > screen05height && scrollAmount < screen06height) {
    $('.topmenu').css({ 'background-color' : '#eee'});
}  
  if(scrollAmount > screen06height && scrollAmount < screen07height) {
    $('.topmenu').css({ 'background-color' : '#fff'});
}  

 
});