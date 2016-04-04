/*
* @Author: tangxu
* @Date:   2016-04-02 17:39:09
* @Last Modified by:   tangxu
* @Last Modified time: 2016-04-04 18:32:47
*/

'use strict';
$(function(){
    //设置body高度为浏览器可视区域高度
    $("body").height($(window).height());
    //轮播图
    $(".gallery").slider({
        prevBtn:     ".prevBtn",//上一页按钮
        nextBtn:     ".nextBtn",//下一页按钮
        listCont:    ".picUl",//滚动列表外层
        delayTime:   6000,//自动轮播时间间隔,默认1秒
        speed:       500,//滚动速度,默认1秒/次
        amount:      1,//单次滚动数量,默认1个
        showNum:     1,
        autoPlay:    true,
        scrollWhere: "next"
    });
    //雪
    $.snowFall({
            //创建粒子数量，密度
            particleNo: 300,
            //粒子下拉速度
            particleSpeed:30,
            //粒子在垂直（Y轴）方向运动范围
            particleY_Range:1000,
            //粒子在垂直（X轴）方向运动范围
            particleX_Range:1000,
            //是否绑定鼠标事件
            bindMouse: true,
            //相机离Z轴原点距离
            zIndex:600,
            //摄像机视野角度
            angle:55,
            wind_weight:0
    });
})