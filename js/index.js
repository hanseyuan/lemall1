/*轮播导航菜单*/
$(".nav_detail_list").hover(function(){
    var $parent=$(this)
    $parent.children(".list_detail").toggleClass("in")
})
/*固定导航*/

$(".nav_fixed ul:first-child li").hover(function(){
    var $parent=$(this)
    $parent.children(".nav_hover").toggleClass("hover")
})

/*轮播图
* strInds 小圆点
* LIWIDTH 定时移动的尺寸
* LIWIDTH_ALL 整个ul(容器宽度)
* INTERVAL 定时器时间
* */
$.ajax({
    type:"GET",
    url:'data/index/banner.php',
    success:function(data){
        data.push(data[0])
        // console.log(banners);
        var html="",
            indsHtml="";
        for(var banner of data){
            html+=`
            <li class="${banner.title}">
               <a href="#"><img src="${banner.img}"></a>
            </li>
            `;
        }
        $(".img_all").html(html)
        var $li=$(".banner_img .img_all>li"),
            strInds="<li></li>".repeat(data.length-1),
            LIWIDTH=$li.css("width"),
            LIWIDTH_ALL=parseInt(LIWIDTH)*data.length,
            n=0,
            $bannerInds=$("ul.indicators"),
            timer=null,
            TRANS=500,
            INTERVAL=3000;
        $bannerInds.html(strInds);

        $li.css("width",LIWIDTH)
        $li.parent().parent(".banner_img").css("width",LIWIDTH);
        $li.parent().css("width",LIWIDTH_ALL+"px");
        $bannerInds.children("li:nth-child(1)").addClass("hover")
        /*轮播函数*/
        function play(){
             timer=setInterval(function moveOnce(){
                n++;
                var left=parseInt(LIWIDTH)*n;
                $li.parent().css("left",-left+"px");
                $bannerInds.children("li:nth-child(n)").removeClass("hover");
                if(n==data.length-1){
                    $bannerInds.children("li:nth-child(1)").addClass("hover")
                    setTimeout(()=>{
                        $li.parent().css({
                            transition:"none",
                            left:0
                        })
                        n=0;
                        setTimeout(()=>{
                            $li.parent().css("transition","all ."+TRANS/100+"s linear")
                        },100)
                    },TRANS);
                }
                $bannerInds.children(":eq("+n+")").addClass("hover")
                    .siblings().removeClass("hover");
            },TRANS+INTERVAL);
        }
        play();
        /*鼠标移入事件*/
         $li.parent().parent().hover(function(){
             clearInterval(timer)
             timer=null
         },
            function(){
             play();
            }
         );
        /*导航圆点点击事件*/
         $bannerInds.on("click","li",function(e){
             var $child=$(e.target),
                 i=$child.index();
              n=i;
             $li.parent().css("left",-parseInt(LIWIDTH)*n+"px");
             $child.addClass("hover")
                 .siblings().removeClass("hover");
         })
    },
    error:function(){
        alert('网络故障')
    }
})


/*楼层*/
$.ajax({
    type:"GET",
    url:"data/index/floor.php",
    success:function(data){
        var data = eval ("(" + data + ")");
        /* floor1*/
        var home=data.home;
        var html="";
        var html2="";
        for(var i=0;i<home.length;i++){
            var obj=home[i];
            if(i==0){
                html+=`
                    <div class="p_1">
                        <a href="detail.html"><img src="img/floor1/floor1.1.jpg"></a>
                      </div>
                      <div class="p_2 clear">
                        <div>
                          <a href="#"><img src="${obj.pic}"></a>
                        </div>
                        <ul>
                          <li class="p_title"><a href="detail.html">${obj.title}</a></li>
                          <li class="p_event"><span>${obj.details}</span></li>
                          <li class="p_price"><a href="detail.html">￥${obj.price}</a></li>
                        </ul>
                      </div>
                `
            }else if(i==1){
                html+=`
                    <div class="p_3 clear">
                        <div>
                          <a href="detail.html"><img src="${obj.pic}"></a>
                        </div>
                        <ul>
                          <li class="p_title"><a href="#">${obj.title}</a></li>
                          <li class="p_event"><span>${obj.details}</span></li>
                          <li class="p_price"><a href="#">￥${obj.price}</a></li>
                        </ul>
                     </div>
                `
            }else if(i==2){
                html+=`
                    <div class="p_4 clear">
                        <div>
                          <a href="detail.html"><img src="${obj.pic}"></a>
                        </div>
                        <ul>
                          <li class="p_title"><a href="detail.html">${obj.title}</a></li>
                          <li class="p_event"><span>${obj.details}</span></li>
                          <li class="p_price"><a href="detail.html">￥${obj.price}</a></li>
                        </ul>
                     </div>
                `
            }else {
                html2+=`
                    <ul>
                       <li><a href="detail.html"><img src="${obj.pic}"></a></li>
                       <li><a href="detail.html">${obj.title}</a></li>
                       <li><a href="detail.html">¥${obj.price}</a></li>
                     </ul>
                `
            }
        }
        html2+=`
            <ul>
              <li><a href="detail.html"><img src="img/floor1/floor1.9.jpg"></a></li>
            </ul>
        `
        $("#floor1 .product").html(html);
        $("#floor1 .product2").html(html2);


        /*floor 2*/
        var phone=data.phone;
        var html="";
        var html2="";
        for(var i=0;i<phone.length;i++){
            var obj=phone[i];
            if(i==0){
                html+=`
                    <div class="p_1">
                        <a href="#"><img src="img/floor2/floor2.1.jpg"></a>
                      </div>
                      <div class="p_2 clear">
                        <div>
                          <a href="detail.html"><img src="${obj.pic}"></a>
                        </div>
                        <ul>
                          <li class="p_title"><a href="detail.html">${obj.title}</a></li>
                          <li class="p_event"><span>${obj.details}</span></li>
                          <li class="p_price"><a href="detail.html">￥${obj.price}</a></li>
                        </ul>
                      </div>
                `
            }else if(i==1){
                html+=`
                    <div class="p_3 clear">
                        <div>
                          <a href="detail.html"><img src="${obj.pic}"></a>
                        </div>
                        <ul>
                          <li class="p_title"><a href="detail.html">${obj.title}</a></li>
                          <li class="p_event"><span>${obj.details}</span></li>
                          <li class="p_price"><a href="detail.html">￥${obj.price}</a></li>
                        </ul>
                     </div>
                `
            }else if(i==2){
                html+=`
                    <div class="p_4 clear">
                        <div>
                          <a href="#"><img src="${obj.pic}"></a>
                        </div>
                        <ul>
                          <li class="p_title"><a href="detail.html">${obj.title}</a></li>
                          <li class="p_event"><span>${obj.details}</span></li>
                          <li class="p_price"><a href="detail.html">￥${obj.price}</a></li>
                        </ul>
                     </div>
                `
            }else {
                html2+=`
                    <ul>
                       <li><a href="detail.html"><img src="${obj.pic}"></a></li>
                       <li><a href="detail.html">${obj.title}</a></li>
                       <li><a href="detail.html">¥${obj.price}</a></li>
                     </ul>
                `
            }
        }
        html2+=`
            <ul>
              <li><a href="#"><img src="img/floor2/floor2.9.jpg"></a></li>
            </ul>
        `
        $("#floor2 .product").html(html);
        $("#floor2 .product2").html(html2);


        /*floor 3*/
        var parets=data.parets;
        var html="";
        var html2="";
        var html3="";
        for(var i=0;i<parets.length;i++){
            var obj=parets[i];
            if(i<3){
                html+=`
                    <ul>
                       <li><a href="${obj.href}"><img src="${obj.pic}"></a></li>
                       <li class="parts_title"><a href="${obj.href}">${obj.title}</a></li>
                       <li class="parts_state"><span>${obj.details}</span></li>
                       <li class="parts_price"><a href="${obj.href}">¥${obj.price}</a></li>
                    </ul>
                `
            }else if(i<6&&i>2){
                html2+=`
                    <div class="option clear">
                       <div><a href="${obj.href}"><img src="${obj.pic}"></a></div>
                       <ul>
                         <li><a href="${obj.href}">${obj.title}</a></li>
                         <li><a href="${obj.href}">¥${obj.price}</a></li>
                       </ul>
                    </div>
                `
            }else{
                html3+=`
                    <ul>
                       <li><a href="${obj.href}"><img src="${obj.pic}"></a></li>
                       <li><a href="${obj.href}">${obj.title}</a></li>
                       <li><a href="${obj.href}">¥${obj.price}</a></li>
                     </ul>
                `
            }
        }
        html3+=`
            <ul>
              <li><a href="#"><img src="img/floor3/floor3.10.jpg"></a></li>
            </ul>
        `
        $("#floor3 .parts_1").html(html);
        $("#floor3 .parts_2").html(html2);
        $("#floor3 .product2").html(html3);


        /*floor 4*/

        var capacity=data.capacity;
        var html="";
        var html2="";
        var html3="";
        for(var i=0;i<capacity.length;i++){
            var obj=capacity[i];
            if(i<3){
                html+=`
                    <ul>
                       <li><a href="${obj.href}"><img src="${obj.pic}"></a></li>
                       <li class="parts_title"><a href="${obj.href}">${obj.title}</a></li>
                       <li class="parts_state"><span>${obj.details}</span></li>
                       <li class="parts_price"><a href="${obj.href}">¥${obj.price}</a></li>
                    </ul>
                `
            }else if(i<6&&i>2){
                html2+=`
                    <div class="option clear">
                       <div><a href="${obj.href}"><img src="${obj.pic}"></a></div>
                       <ul>
                         <li><a href="${obj.href}">${obj.title}</a></li>
                         <li><a href="${obj.href}">¥${obj.price}</a></li>
                       </ul>
                    </div>
                `
            }else{
                html3+=`
                    <ul>
                       <li><a href="${obj.href}"><img src="${obj.pic}"></a></li>
                       <li><a href="${obj.href}">${obj.title}</a></li>
                       <li><a href="${obj.href}">¥${obj.price}</a></li>
                     </ul>
                `
            }
        }
        html3+=`
            <ul>
              <li><a href="#"><img src="img/floor4/floor4.10.jpg"></a></li>
            </ul>
        `
        $("#floor4 .parts_1").html(html);
        $("#floor4 .parts_2").html(html2);
        $("#floor4 .product2").html(html3);
    },
    error:function(){
        alert("网络故障")
    }
})


/*左边滑动小导航*/
$(function () {
    var $fTops=$(".floor>.title_all")//4个楼层
    var html="";

    for (var fTop of $fTops){
        html+=
            `
             <li class="lift_item">
						<a href="javascript:;" class="lift_btn">
							<span class="lift_btn_txt">${
                        $(fTop).children("h2").html().trim().slice(0,4) 
                         }
							</span>
						</a>
					</li>   
            `
    }
    var $ulList=$("[data-list=elevator]");
    $ulList.html(html);
    $ulList.children().first().addClass("lift_item_on");
    function getTotalTop(elem) {//计算一个元素距离顶部距离
        var total=elem.offsetTop;
        while(elem.offsetParent){
            elem=elem.offsetParent;
            total+=elem.offsetTop;
        }
        return total;
    }
    var top1=getTotalTop($fTops[0]); //楼层1距离顶部距离
    var floors=$(".floor")
    for(var f of floors){
        f.totalTop=getTotalTop(f)
    }
    var FHEIGHT=parseFloat(
        getComputedStyle(floors[0]).height
        );
    function checkOn(){
        var scrollTop=document.documentElement.scrollTop;
        for(var i=0;i<floors.length;i++){
            if(scrollTop>=floors[i].totalTop+20-innerHeight/2
                &&scrollTop<floors[i].totalTop+20+FHEIGHT-innerHeight/2)
                $ulList.children(":eq("+i+")").addClass("lift_item_on");//亮
            else
                $ulList.children(":eq("+i+")").removeClass("lift_item_on")
                    //灭
        }
    }
    // document.body.scrollTop 页面滚动的高度
    window.onscroll=function(){
        // console.log(document.documentElement.scrollTop)
        if(top1<=document.documentElement.scrollTop+innerHeight/2)
            $ulList.parent().css("display","block");
        else
            $ulList.parent().css("display","none");

        checkOn();
    }
    //点击跳到相应楼层
    $ulList.on("click","li",function(){
        var i=$(this).index();
        moveTo(i);

    })

    var DIST=0,DURA=500,STEPS=100,
        interval=DURA/STEPS,step=0,
        moved=0,timer=null;
    function moveTo(i){
        if(timer!=null){
            clearInterval(timer);
            timer=null;
            moved=0;
        }
        DIST=
            floors[i].totalTop-document.documentElement.scrollTop;
        step=DIST/STEPS;
        timer=setInterval(()=>{
            window.scrollBy(0,step);
            moved++;
            if(moved==STEPS){
                clearInterval(timer);
                timer=null;
                moved=0;
                checkOn();
            }
        },interval)
    }
})



















