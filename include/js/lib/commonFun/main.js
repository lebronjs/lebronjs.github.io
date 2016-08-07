define(function(require,exports,module){
	var Common={
		 /**
		 * 复选框全选
		 * @return {void}
		 * @param {checkBtn:全选按钮 checkBox:目标复选框}
		 * @author tangxu
		 * @version 2015-12-24
		 * @since 2015-12-24
		 */
		selectAll: function(checkBtn, checkBox) {
			var isChecked = checkBtn.prop("checked");
			!isChecked ? checkBox.prop("checked", false) : checkBox.prop("checked", true);
		},
		/**
		 * 网页loading，加载图片判断
		 * @return {void}
		 * @param {callback:成功后回调函数}
		 * @author tangxu
		 * @version 2016-08-07
		 * @since 2016-08-07
		 */
		loadImg:function(callback){
			var imgdeferreds=[];
			$('img').each(function(){
				var dfd=$.Deferred();
				$(this).bind('load',function(){
					dfd.resolve();
				}).bind('error',function(){
					//图片加载错误，加入错误处理
				});
				if(this.complete){
					setTimeout(function(){
						dfd.resolve();
					},1000);
				};
				imgdeferreds.push(dfd);
			});
			$.when.apply(null,imgdeferreds).done(function(){
				callback();
			})
		}
	}
	module.exports=Common;
});