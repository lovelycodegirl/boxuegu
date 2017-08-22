/**
 * Created by Xiaohonghua on 2017/8/22.
 */

define([], function () {
  
  function getParamObj() {
    var paramStr = location.search;
    //去除第一个?
    paramStr = paramStr.slice(1);
    
    var paramArr = paramStr.split("&");
    var paramObj = {};
    for(var i = 0; i < paramArr.length; i++) {
      var key = paramArr[i].split("=")[0];
      var value = paramArr[i].split("=")[1];
      
      paramObj[key] = value;
    }
    return paramObj;
  }
  
  function getParam(key) {
    return getParamObj()[key];
  }
  
  return {
    getParamObj:getParamObj,
    getParam:getParam
  }
  
  
});