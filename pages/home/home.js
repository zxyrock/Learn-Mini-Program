// pages/home/home.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // -----1.发送网络请求(原生方式，太古老)------
    this.get_data_origin()
    // -----2.使用封装的request发送网络请求
    request({
      url:"https://api.apiopen.top/getJoke?",
      data:{
        page:1,
        count:2,
        type:'video'
      }
    }).then(res =>{
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

   
  },
  get_data_origin(){
    // wx.request({
    //   // 第一种写法：直接将网址写上
    //   // url:'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
    //   // 第二种写法:将网址拆分，用data拼接
    //   url: 'https://api.apiopen.top/getJoke?',
    //   // method:用于设置请求方式，默认为get请求
    //   // method:'POST'
    //   data:{
    //     page:1,
    //     count:2,
    //     type:'video'
    //   },
    //   // success:成功的回调
    //   success:function(res){
    //     console.log(res)
    //   },
    //   // fail:失败的回调
    //   fail:function(err){
    //     console.log(err)
    //   },
    //   // complete:接口调用完后会回调，不论成功还是调用失败
    //   complete:function(){
    //     console.log('---')
    //   }
    // })
    
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