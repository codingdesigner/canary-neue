$(function(){var a=$.jPanelMenu({beforeOpen:function(){$("#wall").remove(),$(".jPanelMenu-panel").append('<div id="wall" data-module-type="Wall"></div>')},beforeClose:function(){$("#wall").remove()}});a.on(),$(".slideshow").flexslider({selector:".slides > .slide",animation:"slide",prevText:"previous",nextText:"next"}),$(".flex-direction-nav a").addClass("icon-canary")});