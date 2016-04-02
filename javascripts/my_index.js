/*
* @Author: tangxu
* @Date:   2016-04-02 17:39:09
* @Last Modified by:   tangxu
* @Last Modified time: 2016-04-02 18:42:34
*/

'use strict';
$(function(){
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
})