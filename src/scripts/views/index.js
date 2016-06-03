var indexStr = require("../tpl/index.string");

SPA.defineView('index', {
	html : indexStr,
	init : {
		mySwiper : null,
		imgScr : '/myFirst/images/img_tab_',
		imgArr : ['recover', 'recover_disabled', 'shopping', 'shopping_disabled', 'service', 'service_disabled', 'me', 'me_disabled']
	},
	plugins: ['delegated'],
	modules: [{
	    name: 'content',
	    container: '.m-index-container',
	    views: ['home', 'markit', 'serve', 'my'],
	    defaultTag: 'home'
	  }],
	bindActions : {
		'switch.view': function (e) {
			this.modules.content.launch(e.data.tag);
			$(e.el).each(function(i){
				console.log(i);
//				$(e.el).find('img').eq(i).attr('src', this.imgScr + this.imgArr[2*i]+'.png');
			});
			$(e.el).find('img').attr('src', this.imgScr + this.imgArr[2*$(e.el).index()]+'.png');
	    }
	},
	bindEvents : {
		'beforeShow':function(){
		this.mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true
		 });
		}
	}
});
 