/**
 * Created by Xiaohonghua on 2017/8/20.
 // */

define(["jquery","template","bootstrap"],function ($,template) {
  
  //1.讲师列表的渲染
  $.ajax({
    type: "get",
    url: "/api/teacher",
    dataType: "json",
    success: function (info) {
      if (info.code == 200) {
        var html = template("list_tmp", info)
        $(".teacher_list").html(html)
      }
    }
  });
  
  //2.显示模态框
  $(".teacher_list").on("click",".btn_view",function () {
    
    var tc_id=$(this).parent().data("id");
    $.ajax({
      type:"get",
      url:"/api/teacher/view",
      data:{
        tc_id:tc_id
      },
      success:function (info) {
        if(info.code==200){
          console.log(info);
          var html=template("list_model_tmp",info.result);
          $("#teacherModal").html(html).modal("show");
        }
      }
    });
  })
  
  
  //3.启用注销功能
  
  $(".teacher_list").on("click",".btn_handle",function () {
      var tc_id=$(this).parent().data("id");
      var tc_status=$(this).parent().data("status");
      var $that=$(this);
    $.ajax({
      type:"post",
      url:"/api/teacher/handle",
      data:{
        tc_id:tc_id,
        tc_status:tc_status
      },
      success:function (info) {
        console.log(info);
       if(info.code==200){
         if(info.result.tc_status=="0"){
           $that.text("注销");
           $that.removeClass("btn-success");
           $that.addClass("btn-warning");
         }else{
           $that.text("启用");
           $that.removeClass("btn-warning");
           $that.addClass("btn-success");
         }
         $that.parent().data("status", info.result.tc_status);
       }
      }
    })
  })
  
  
  
})