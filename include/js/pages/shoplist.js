define(function(require,exports,module){
	var commonFun = require('commonFun');
	
	function calculate(obj){
		var tolPrice=0;
		$.each(obj,function (i,v){
			var unitPrice=$(v).parents("tr").find(".price").text();
			tolPrice+=Number(unitPrice);
		})
		$("#totalPrice").text(tolPrice);
	}
	
	function sortPrice(obj){//得到按照价格大小排列的序号数组
		var maxPrice=obj.eq(0).text(),arr=[],sortArr=[];
		$.each(obj,function(i,v){
			arr.push($(v).text());
			arr.sort(function(a,b){return b-a});//价格排序
		});
		$.each(arr,function(index,val){
			$.each(obj,function(i,v){//序号排序
				if($(v).text()===val){
					sortArr.push(i);
				}
			})
		})
		return sortArr;
	}
	
	function sortCloth(obj){//根据序号重新排序商品
		var priceArr=sortPrice(obj),newTr="";
		var originalTr=$("#mainList").find("tr");
		var num=0;
		$.each(priceArr,function(i,v){
			num=parseInt(v);
			newTr+=originalTr[num].outerHTML;//转换成dom对象取html
		})
		$("#mainList").empty().append(newTr);
	}
	//全选
	$(document).delegate('#checkAll', 'click', function () {
		commonFun.selectAll($("#checkAll"), $(".cBox"));
		var selectBox=$(".cBox:checked");
		calculate(selectBox);
	});
	//选中商品计算价格
	$(document).delegate('.cBox', 'click', function () {
		var selectBox=$(".cBox:checked");
		calculate(selectBox);
	});
	//点击排序
	$(document).delegate('.sortBtn', 'click', function () {
		sortCloth($(".price"));
	});
});