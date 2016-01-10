$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
  $('#fullpage').fullpage({
    anchors: ['intro', 'edz', 'news', 'copy', 'sports', 'social', 'photo', 'design', 'video', 'web', 'biz', 'advertising', 'marketing', 'dpict', 'circulation', 'front-office', '34st','utb', 'join'],
    sectionsColor: ['#EAE9E9', '#EAE9E9', '#7E8F7C'],
    css3: true,
    scrollingSpeed: 500,
    scrollBar: true
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});