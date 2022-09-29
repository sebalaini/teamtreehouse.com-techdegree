$(document).ready(function(){

/***************
MENU BTN
***************/

	$("#menu").click(function() {
		$( ".nav" ).fadeToggle("slow", "linear");

/*	$(document).click(function(event) {
		if(!$(event.target).is('#menu')) {
		$(".nav").hide();
		}
	});
*/
});



/***************
A NAV CHANGE COLOR
***************/

var contentSections = $('.section');
var navigationItems = $('.nav a');

updateNavigation();
$(window).on('scroll', function() {
  updateNavigation();
});

function updateNavigation() {
  
  contentSections.each(function() {
    $this = $(this);
    var activeSection = $('.nav a[href="#' + $this.attr("id") + '"]');
    var scrollPosition = $(window).scrollTop();
    var midWindowLocation = $(window).height() / 2;
    var sectionLocationTop = $this.offset().top;
    var sectionHeight = $this.height();
    
    //the section location tells us how many pixels separate the top of the section element from the top of the document
    //the scrollPostion tells us the amount of pixels scrolled down, relative to the top of the window, or the area "above" the window
    //if the top of our section element was flush with the top of the window, these two values would be equal
    //the if statement first subtracts the distance to the middle of the window to offset this, meaning the first portion of the if statement returns true if the top of the section element is flush with the middle of the window, rather than the top of it
    
    //the second part of the if does the same for below the element
    
    if (
      (sectionLocationTop - midWindowLocation < scrollPosition) 
        && (sectionLocationTop + sectionHeight - midWindowLocation > scrollPosition)
       ) {
      activeSection.addClass('selected');
    } else {
      activeSection.removeClass('selected');
    }
  });
}



}); // end ready


