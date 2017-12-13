/*
* 页面加载完成使得每层字体能够动态出现
* */

$(function () {
    /*
    * 计算一个元素具体顶部的距离
    * */
    function getTotalTop(elem) {
        var total=elem.offsetTop;
        while(elem.offsetParent){
            elem=elem.offsetParent;
            total+=elem.offsetTop;
        }
        return total;
    }

/*背景1距离顶部的距离*/

    var top=getTotalTop($("#bg1")[0]);

    window.onscroll=function(){
      var scrollTop=document.documentElement.scrollTop;
      if(scrollTop+innerHeight>top-20){
          $("#bg1").children("div:first-child").animate({
              opacity:1,
              height:300
          },500)
          $("#bg1").animate({
              backgroundPositionY:-50
          },2000)
      }
    }
})