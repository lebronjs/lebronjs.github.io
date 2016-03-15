define(function(require,exports,module){
	var frequncy={};
	$(document).on('keydown',function(event){
		var keyCode=event.keyCode;
		var $this=$('span[keyCode='+keyCode+']');
		if(frequncy[keyCode]){
			frequncy[keyCode]+=1;
		}
		else{
			frequncy[keyCode]=1;
		}
		$this.text(frequncy[keyCode]);
		return false;
	})
});