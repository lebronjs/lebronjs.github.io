define(function(require,exports,module){
    require("bootstrap");
    var commonFun = require('commonFun');
    commonFun.loadImg(loadSuccFun);

    function loadSuccFun (){
        $("body").removeClass("loadStyle");
        $("#loadDiv").fadeOut("slow");
        setTimeout(function(){
          $("body").addClass('animation');
        },1000);
    }


    /*滚动效果开始*/
    $(window).scroll(function(){
        var me=$(this), scrollTop = me.scrollTop();
        if(scrollTop > 80){
            $("body").removeClass('animation');
            $(".gotop-arrow").removeClass('hide').show(700);
        }
        else{
            $("body").addClass('animation');
            $(".gotop-arrow").hide(700);
        }
    })
    $(document).on("click",".gotop-arrow",function(){
        $('html,body').animate({ scrollTop: 0 }, 700);
    })
    $(document).on("click",".navToBtn",function(){
        var slides = {
          Home:0,
          Profile:$('#cCont').offset().top,
          Other:$('#bCont').offset().top,
        };
        var anchorShift=slides[$(this).text()];
        $('html,body').animate({ scrollTop: anchorShift }, 700);
        $('.navbar-collapse').removeClass('in');
        return false;
    })
    /*滚动效果结束*/




    /*轮播图开始*/
    $(document).on("click",".thumb-preview",function(){
        $('.thumb-preview').removeClass('active');
        $(this).addClass('active');
    })
    $(document).on("click",".nextBtn",function(){
        var activeNum=$(".item.active").index()+1;
        if(activeNum===$('li.thumb-preview').length){activeNum=0;};
        $('.thumb-preview').removeClass('active');
        $("li.thumb-preview[data-slide-to="+activeNum+"]").addClass("active");
    })
    $(document).on("click",".prevBtn",function(){
        var activeNum=$(".item.active").index()-1;
        if(activeNum===-1){activeNum=$('li.thumb-preview').length-1;};
        $('.thumb-preview').removeClass('active');
        $("li.thumb-preview[data-slide-to="+activeNum+"]").addClass("active");
    })
    /*轮播图结束*/



    /*简历部分开始*/
    //提示框
    $('#avatar').tooltip({'placement':'right'});
    //弹出框
    $('#contact').popover({
        trigger:'manual',
        placement:'bottom',
        container: 'body',
        html:true,
        content:'<p>QQ: 1234567</p><p>微博：weibo.com/nic</p><p>微信：cleveland</p>'
    }).on("click", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });
    $(document).on("mouseleave",".popover",function(){
        $(this).popover("hide");
    })
    $.getScript('http://www.chartjs.org/assets/Chart.js',function(){
        var zhdata = [{
            label: '中文水平',
            value: 90,
            highlight: "#FFC870",
            color: "#F7464A"
        }, {
            value: 10,
            color: "#EEEEEE"
        }]
        var zhoptions = {
            animation: true,
            segmentShowStroke : false
        };
        var c = $('#zh');
        var ct = c.get(0).getContext('2d');
        var zhChart = new Chart(ct).Doughnut(zhdata, zhoptions);


        var endata = [{
            label: '英文水平',
            value: 70,
            highlight: "#5AD3D1",
            color: "#4D5360"
        }, {
        value: 30,
        color: "#EEEEEE"
        }]
        var enoptions = {
            animation: true,
            segmentShowStroke : false
        };
        var c = $('#en');
        var ct = c.get(0).getContext('2d');
        var enchart = new Chart(ct).Doughnut(endata, enoptions);
    });
    /*简历部分结束*/
});