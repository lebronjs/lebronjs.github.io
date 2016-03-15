/*
* @Author: tangxu
* @Date:   2016-02-26 11:26:34
* @Last Modified by:   tangxu
* @Last Modified time: 2016-03-09 17:01:57
*/

'use strict';
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000/60);
        };
})();

;(function($){
    $.snowfall=function($ele,options){
        var lastTime,deltaTime,timer;
        var eleWidth,eleHeight,eleLeft,eleTop;
        var leftDir=1;
        var snowNum=10;
        var snow=[];
        /*定义飘落物*/
        var snowObj=function(){
            this.x;
            this.y;
            this.fallPic;
            this.alive;
            this.size;
            this.yv;
            this.shiftLeft;
            this.snowImg;
        };
        snowObj.prototype.init=function(aimObj){
            this.x=0;
            this.y=0;
            this.size=0;
            this.alive=false;
            this.yv=0;
            this.shiftLeft=0;
            this.snowImg={};
            this.born(aimObj);
        };

        snowObj.prototype.born=function(aimObj){
            this.size=30;
            this.x=eleLeft+eleWidth*Math.random()-this.size;
            this.y=10;
            this.alive=true;
            this.yv=0.003+0.017*Math.random();
            this.shiftLeft=10*Math.random()-5;
            this.snowImg=new Image(this.size, this.size*1.2);
            this.snowImg.src="include/images/huaban.png";
            $(this.snowImg).css({
                "left":this.x,
                "top":this.y,
                "position":"absolute"
                });
            aimObj.append(this.snowImg);

        };

        snowObj.prototype.floatDown=function(aimObj){

            if(this.y>eleTop+eleHeight-this.size*1.2){
                $(this.snowImg).remove();
                this.init(aimObj);
                //console.log(this.snowImg);
                return;
            }
            else{
                $(this.snowImg).css({
                    "top":this.y+=this.yv*deltaTime*5,
                    //"left":this.x+=this.yv*deltaTime*this.shiftLeft*leftDir
                });
            }
        };

        var cfgObj={};
        if(typeof options === undefined){
            options = {};
        };
        var defaultCfg={
            picArr: ["snowPic"],
            downCount: 10,
            minSize: 1,
            maxSize: 2,
            minSpeed: 1,
            maxSpeed: 5,
            dateFmt: 'yyyy-MM-dd'
        };
        cfgObj = $.extend({},defaultCfg,options);
        snowInit($ele);
        snowloop();

        function snowInit(){
            eleWidth=$ele.width();
            eleHeight=$ele.height();
            eleLeft=$ele.offset().left;
            eleTop=$ele.offset().top;
            lastTime=Date.now();
            deltaTime=0;
            timer=0;
            for(var i=0;i<snowNum;i++){
                snow.push(new snowObj());
                snow[i].init($ele);
            }

        };

        function drawSnow(){
            if(timer<1000){
                leftDir=1;
            }
            else if(timer>2000){
                leftDir=1;
                timer=0;
            }
            else{
                leftDir=-1;
            }
            for(var i=0;i<snowNum;i++){
                snow[i].floatDown($ele);
            }
        }

        function snowloop(){
            window.requestAnimFrame(snowloop);
            var now=Date.now();
            deltaTime=now-lastTime;
            lastTime=now;
            timer+=deltaTime;
            drawSnow();
            //console.log(deltaTime);
        }

    }
})(jQuery);