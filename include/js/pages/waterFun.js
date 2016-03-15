define(function(require,exports,module){
	var num=0;
	var waterfall={
		creatFall:function(){
			for(j=0;j<20;j++){
				var oLi=document.createElement('li');
				oLi.style.height=this.rnd(100,400)+'px';
				oLi.style.backgroundColor='rgb('+this.rnd(0,255)+','+this.rnd(0,255)+','+this.rnd(0,255)+')';
				oLi.style.textAlign='center';
				oLi.innerHTML=++num;
				this.minUl().appendChild(oLi);
			}
		},
		
		minUl:function(){
			var minUl=$("ul").eq(0);
			for(i=1;i<$("ul").length;i++){
				if($("ul").eq(i).outerHeight()<minUl.outerHeight()){
					minUl=$("ul").eq(i);
				}
			}
			return minUl.get(0);
		},
		
		maxUl:function(){
			var maxUl=$("ul").eq(0);
			for(i=1;i<$("ul").length;i++){
				if($("ul").eq(i).outerHeight()>maxUl.outerHeight()){
					maxUl=$("ul").eq(i);
				}
			}
			return maxUl.get(0);
		},
		
		rnd:function(n,m){
			return parseInt(Math.random()*(m-n+1)+n);
		}
	}		
	module.exports=waterfall;
});