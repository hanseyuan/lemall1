/*header*/
(()=>{
    $.ajax({
        type:"GET",
        url:"header.html",
        success:function(data){
            $("#header").html(data);
            var html=`<link rel="stylesheet" href="css/header.css">`;
            var $head=$("head");
            $head.html(html+=$head.html());

            $("[data-trigger=dropdown]").parent().hover(
                function(){
                    var $parent=$(this)
                    $parent.children("[data-trigger=dropdown]").next().toggleClass("hover")
                    $parent.toggleClass("in")
                }
            )
        },
        error:function(){
            alert("网络故障")
        }
    });
})();