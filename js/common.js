function setEqualHeight(columns)
{
  var tallestcolumn = 0;
  columns.each(
  function(){
    currentHeight = $(this).height();
    if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
      }
   });
   
   columns.height(tallestcolumn);
}

$(function() {
	setEqualHeight($("section.services .service-box p"));
	
	$(window).resize(function () {
		$("section.services .service-box p").removeAttr('style');
		setEqualHeight($("section.services .service-box p"));
	});
	
/*8888888888888888888888888888888888888888*/
	



	setEqualHeight($("article.legal-article > .row p"));
	
	$(window).resize(function () {
		$("article.legal-article > .row p").removeAttr('style');
		setEqualHeight($("article.legal-article > .row p"));
	});
	
	
	// Sticky nav
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$('.top-navbar-header').addClass("sticky");
		}
		else{
			$('.top-navbar-header').removeClass("sticky");
		}
	});
	// Sticky nav end
	
	//mobile nav
	$('.navbar-nav li a').click(function() {
		$('.navbar-collapse.collapse.in').removeClass('in');
	});
	//mobile nav end
	
	// scroll to id
	$('#top-access').click(function() {
		$("html, body").animate({ scrollTop: ($('#section-login').offset().top - 93) }, 1000);
	});
	
	
	$('#contacts-menu-item').click(function() {
		$("html, body").animate({ scrollTop: $('#colophon').offset().top }, 1000);
	});
	//scroll to id end
	
	
	//scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	//scroll to top end
	
	
	$('.navbar-collapse').on('wheel', function(e){
		e.preventDefault()
	})
	
	var two = $('.classic-situation-1st-img');
	var three = $('.first-step');

	
	if (window.innerWidth <= 767) {
			two.insertAfter(three);
		} else {
			three.insertAfter(two);
	}
	
	window.onresize = function () {
		if (window.innerWidth <= 767) {
			two.insertAfter(three);
		} else {
			three.insertAfter(two);
		}
	}
	
	
	$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

});