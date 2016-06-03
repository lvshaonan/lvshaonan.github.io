var markitStr = require("../tpl/markit.string");

SPA.defineView('markit', {
	html : markitStr,
//	init : {
//		mySwiper = null
//	},
	bindEvents : {
		'beforeShow':function(){
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true
		 });
		}
	}
});