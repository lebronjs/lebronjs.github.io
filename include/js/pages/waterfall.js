define(function(require,exports,module){
	var waterFall = require('pages/waterFun');
	waterFall.creatFall();
	$(window).scroll(function(){
		var maxUlHeight=$(waterFall.maxUl()).height();//最长的ul的Dom对象的实际高度
		var scrollTop = $(this).scrollTop();
		var winHeight=$(this).height();
		if(scrollTop + winHeight >= maxUlHeight){
	　　　　waterFall.creatFall();
	　　}
	})
	/*$(document).on("scrollstart",function(){
	    var maxUlHeight=$(waterFall.maxUl()).height();//最长的ul的Dom对象的实际高度
		var scrollTop = $(this).scrollTop();
		var winHeight=$(this).height();
		if(scrollTop + winHeight >= maxUlHeight){
	　　　　waterFall.creatFall();
	　　}
	});*/
});