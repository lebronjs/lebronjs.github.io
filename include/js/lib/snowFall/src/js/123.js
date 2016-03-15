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
		}
	}
	module.exports=Common;
});