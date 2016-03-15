define(function(require,exports,module){
	require("snowFall");
	$.snowfall($(".box2"));
	var AccorFun = require('pages/accorFun');//accorFun=new AccorFun;
    var $centerwell_first = $('#centerwell li:first');
    $centerwell_first.animate({ width: '545px' }, 300);
    $centerwell_first.find('h3').addClass("on");
	var i=1,t;
    $('#centerwell li').click(function () {
		clearTimeout(t);
		var me=$(this);
        //accorFun.offOn(me);//第一种情况实例化类
		//AccorFun.offOn(me);//第二种情况对象
		$.offOn(me);//第三种情况：扩展jq
		autoClick();
    });
	function autoClick(){
		var i=$(".on").parents("li").index()+1;
		if(i===$('#centerwell li').length){i=0;};
		$.offOn($('#centerwell li').eq(i))
		t=setTimeout(autoClick,5000);
	}
	var initTime=setTimeout(autoClick,5000);
});