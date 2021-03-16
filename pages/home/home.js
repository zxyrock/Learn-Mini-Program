// pages/home/home.js

// 通过getApp()方法去获取自定义的全局数据，即getApp()获取App()产生的示例对象
const  app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

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
       counter:0
  },
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})