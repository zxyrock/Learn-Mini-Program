App({
  // 可以自定义一些全局数据
  globalData:{
     name:'孙悟空',
     age:600
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // 获取用户信息
    console.log(options)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow （会触发多次）
   */
  onShow: function (options) {
    // 1.判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }

    // 2.获取用于信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
