/**
 * Created by Xiaohonghua on 2017/8/20.
 */
//
define(["jquery", "template", "jquery_cookie"], function ($, template) {
  $(function () {
    
    //1.除了登录页面，其他页面都需要
    if (location.pathname !== "/login") {
      //判断用户有没有PHPSESSID，如果有，说明登录了，如果没有，跳转到login页面
      if ($.cookie("PHPSESSID")) {
        //1. 设置头像
        var userinfo = $.cookie("userinfo");
        userinfo = JSON.parse(userinfo);
        var html = template("userinfo-tpl", userinfo);
        $("#userinfo").html(html);
      } else {
        location.href = "/login";
      }
    
    
    
   //2.退出登录
    $("#logout").click(function () {
      $.ajax({
        type:"post",
        url:"/api/logout",
        success:function (info) {
          if(info.code=="200"){
            //删除userinfo这个cookie
            $.removeCookie("userinfo", {path: "/"});
            //跳转到login页面
            location.href = "/login";
          }
        }
      })
    });
    
                                             
    //3.侧边栏高亮
      var $links=$(".navs a");
      var pathname=location.pathname;
      $links.each(function () {
        var $that =$(this);
        $that.removeClass("active")
        if($that.attr("href")==pathname){
          $that.addClass("active");
        }
      });

  
  
    $(".two_menu").click(function () {
      $(this).children("ul").slideToggle();
    });

    //如果是二级菜单下的某个菜单亮起来，需要让这个二级菜单展开的状态。
    $(".two_menu").find(".active").parent().parent().show();
    }
  });
})