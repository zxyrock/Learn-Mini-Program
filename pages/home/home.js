// pages/home/home.js

// 通过getApp()方法去获取自定义的全局数据，即getApp()获取App()产生的示例对象
const  app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
const name = app.globalData.name;
const age = app.globalData.age;

// Page()方法注册页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
       name:'zxyrock',
       age:23,
       team: [
        {id: 111,name:'唐三藏',age: 20},
        {id: 112,name:'孙悟空',age: 600},
        {id: 113,name:'猪八戒',age: 800},
        {id: 114,name:'沙和尚',age: 1000},
        {id: 115,name:'白龙马',age: 700}
       ],
       counter:0,
       code:0
  },
  // 可以自定义一些事件
  handleBtnClick(){
    // 这种做法是错误的做法，界面是不会刷新的，不同于vue的双向绑定
    // this.data.counter += 1

    // 2.方法:this.setData()来拿到data中的数据进行操作
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  handlaViewClick(){
    console.log('code被点击了')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log('onLoad--页面加载')
     wx.request({
       url: 'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
       success:(res) => {
         console.log(res)
         const code = res.data.code;
         this.setData({
           code : code
         })
       }
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady--页面初次渲染完成')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow--页面显示')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide--页面隐藏')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload--页面卸载即发生跳转')

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh--用户下拉了，配套刷新')

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom--用户上拉，滚动到底部')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage--分享出去')

  },
  // 其他事件
  // 监听页面滚动事件
  onPageScroll(obj){
    console.log(obj)
  }
})