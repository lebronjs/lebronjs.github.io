define(function(require,exports,module){

	function slider(){//第一种情况：类
		
	};
	slider.prototype={
		offOn:function(obj){
			if (!obj.is(':animated')) {
				obj.animate({ width: '545px' }, 300).siblings().animate({ width: '100px' }, 300);
				$('#centerwell li h3').removeClass("on");
				obj.find("h3").addClass("on");
			}
		}
	};
	
	var slider2={//第二种情况：对象
		offOn:function(obj){
			if (!obj.is(':animated')) {
				obj.animate({ width: '545px' }, 300).siblings().animate({ width: '100px' }, 300);
				$('#centerwell li h3').removeClass("on");
				obj.find("h3").addClass("on");
			}
		}
	};
	$.extend({//第三种情况：扩展jq
		offOn:function(obj){
			if (!obj.is(':animated')) {
				obj.animate({ width: '545px' }, 300).siblings().animate({ width: '100px' }, 300);
				$('#centerwell li h3').removeClass("on");
				obj.find("h3").addClass("on");
			}
		}
	})
	//module.exports=slider;
	module.exports=slider2;
});