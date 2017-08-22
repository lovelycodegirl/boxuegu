/**
 * Created by Xiaohonghua on 2017/8/20.
 */

define(["jquery", "template","tool"], function ($, template,tool) {
  $(function () {
    
    //1.判断是添加还是修改,获取到地址中的tc_id,如果有tc_id,说明是修改操作,否则即使添加操作;
    var tc_id=tool.getParam("tc_id");
    if(tc_id){
      //说明是编辑页面,发送一个ajax请求,把tc_id对应的讲师信息获取到
    $.ajax({
      type:"get",
      url:"/api/teacher/edit",
      data:{
        tc_id:tc_id
      },
      success:function (info) {
        if(info.code==200){ //获取成功之后,渲染到编辑页面
          console.log(info);
          var data=info.result;
          data.tittle="讲师编辑";
          data.btn_save="修 改",
            type="edit"
          var html= template("addteacher_tmp",data)
          $(".teacher").html(html);
        }
      }
    })
    }else{ //没有tc_id的情况下
     var html= template("addteacher_tmp",{
        tittle:"讲师添加",
        btn_save:"保 存",
         type:"add"
      });
      $(".teacher").html(html);
    }
  
  
    $(".body").on("click", ".btn_add", function () {
      
      var url = "";
      if (tc_id) {
        url = "/api/teacher/update";
      } else {
        //发送添加的ajax
        url = "/api/teacher/add";
      }
    
      $.ajax({
        type: "post",
        url: url,
        data: $("form").serialize(),
        success:function (info) {
          if (info.code == 200) {
            console.log(info);
            location.href = "/teacher/list";
          }
        }
      })
    })
  });
  
})