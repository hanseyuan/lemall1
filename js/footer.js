/*页面尾部*/
(()=>{
    $.ajax({
        type:"GET",
        url:"footer.html",
        success:function(data){
            $("#footer").html(data);
            var html=`<link rel="stylesheet" href="css/footer.css">`;
            var $head=$("head");
            $head.html(html+=$head.html());
        },
        error:function(){
            console.log("网络故障")
        }
    })
})();