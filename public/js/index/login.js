/**
 * Created by Xiaohonghua on 2017/8/20.
 */

define(["jquery","jquery_cookie"], function ($) {
  
  $(function () {

    $(".btn").click(function () {
      $.ajax({
        type:"post",
        url:"/api/login/",
        data:$("form").serialize(),
        success:function (info) {
          if(info.code=="200"){
            console.log(info);
            var userinfo=JSON.stringify(info.result);
            $.cookie("userinfo",userinfo,{path:"/",expires:1})
            location.href="/"
          }
        }
      })
      return false;
  
    })
  });
});