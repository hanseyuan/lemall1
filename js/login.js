//用户登录页面

$(function(){//页面加载完成成
    //用户名失去焦点
    //01用户名为空
    $("#uname").blur(function(){
        var uname=$(this).val();
        if(uname==""){
            $("#show").html("用户名不能为空")
        }else{
            $("#show").html("");
        }
    })

    //密码失去焦点
    $("#upwd").blur(function(){
        var upwd=$(this).val();
        if(upwd==""){
            $("#show").html("密码不能为空");
        }else{
            $("#show").html("");
        }
    });

    //异步提交登录信息
    $("#btn-login").click(function(){
        $.ajax({
            type:"POST",
            url:"data/user/login.php",
            data:$("#form-login").serialize(),
            success:function(data){
                if(data.code==200){
                    location.href="index.html";
                    console.log(session);
                }else if(data.code==201){
                    $("#show").html("×  用户名或密码错误")
                    $("#uname").val("")
                    $("#upwd").val("")
                }
            },
            error:function () {
                alert("网络连接错误")
            }
        })
    })

    /*点击短信登录 切换到短信登录界面*/
    $("[data-change=note]").click(function(){
        $(this).parent().parent().parent().parent().next().css("display","block")
    })
    /*点击返回跳到 用户名登录界面*/
    $("[data-change=back]").click(function(){
        $(this).parent().parent().parent().parent().css("display","none")
    })

    /*登录框尾部 点击 展开更多登录方式*/
    $("[data-change=spread]").click(function(e){
        e.preventDefault();
        var $a=$(this);
        if($a.html()=="&gt;展开") {
            $a.html("&lt;收起")
                .prev().addClass("all");
        }else{
            console.log(1)
            $a.html("&gt;展开")
                .prev().removeClass("all");
        }

    })
})

























