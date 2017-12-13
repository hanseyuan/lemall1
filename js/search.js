$(function(){
    function loadProductsPage(n){
     $kw=$(".search").val();
        $.ajax({
        type:"GET",
        url:"data/product/search.php?kw="+$kw+"&pno="+n,
        success:function(data){
            // console.log(data.data);
            var html="";
            for(p of data.data){
                html+=`
                    <div class="pro_list" data-list="pro_list">
                      <ul>
                        <li class="list_img">
                          <a href="detail.html"><img src="${p.pic}" alt=""></a>
                        </li>
                        <li class="list_name"><a href="detail.html">${p.title}</a></li>
                        <li class="list_price"><a href="detail.html">￥${p.price}</a></li>
                        <li class="list_evaluate">
                          <span class="on"></span>
                          <span class="on"></span>
                          <span class="on"></span>
                          <span class="on"></span>
                          <span class="die"></span>
                          <span>${p.evaluate}条评价</span>
                        </li>
                        <li class="list_btn"><a href="#">立即购买</a></li>
                      </ul>
                    </div>
                `
            }
            $("#product>div").html(html);
            $("[data-list=pro_list]").hover(function(){
                var $parent=$(this);
                $parent.toggleClass("hover");
                $parent.children().children(".list_btn").toggleClass("hover")
            })

            /*页码*/
            var num=parseInt(data.pno)
            var html="";
            if(num-2>0){
                html+=`<li><a  href="${num-2}">${num-2}</a></li>`;
            }
            if(num-1>0){
                html+=` <li><a  href="${num-1}">${num-1}</a></li>`;
            }
            html+=`<li><a   class="active" href="${num}">${num}</a></li>`;

            if(num+1<=data.pageCount){
                html+=`<li><a   href="${num+1}">${num+1}</a></li>`;
            }
            if(num+2<=data.pageCount){
                html+=` <li><a  href="${num+2}">${num+2}</a></li>`;
            }
             $("#pno>ul").html(html);
        },
        error:function(){
            alert("网络故障")
        }
    })
    }
    loadProductsPage(1);
    /*页码单击事件*/
    $("#pno").on("click","li a",function(e){
        e.preventDefault();
        var pno=$(this).attr("href");
        loadProductsPage(pno);
    })
})


/*点击事件切换不同页面 最新 价格  评论数*/
$("[data-trigger=switch]").onclick(function(){

})