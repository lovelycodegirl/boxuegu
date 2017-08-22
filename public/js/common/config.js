/**
 * Created by Xiaohonghua on 2017/8/20.
 */

require.config({
  baseUrl:"/public/",
  paths:{
    jquery:"assets/jquery/jquery",
    jquery_form:"assets/jquery-form/jquery.form",
    jquery_cookie:"assets/jquery-cookie/jquery.cookie",
    template:"assets/artTemplate/template-web",
    bootstrap:"assets/bootstrap/js/bootstrap",
    echarts:"assets/echarts/echarts",
    tool:"js/common/tool"
  },
  shim:{
    bootstrap:{
      deps:["jquery"]
    }
  }
})
