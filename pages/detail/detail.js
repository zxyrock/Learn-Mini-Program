// pages/detail/detail.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options);
   // 通过拿到options拿到穿过来的数据
   const name = options.name;
   const age = options.age;
   const height = options.height;
   console.log("name:"+ name + ",age:"+ age + ",height:" + height)
  },
  // onUnload：页面销毁时会回调，可以用来向其他页面传递数据
  onUnload:function(){
    // 1.获取首页的页面对象
    // getCurrentPages()用来获取当前所有活跃的页面
    const pages = getCurrentPages()
    // console.log(pages)
    // 2.获取首页的页面
    const home = pages[pages.length -2]
    // 3.调用页面对象的方法
    home.setData({
      title:"呵呵呵~~！"
    })

  }
})