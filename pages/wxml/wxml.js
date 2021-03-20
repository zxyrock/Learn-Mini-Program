// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    score:86
  },
  hendleSeitchShow(){
    this.setData({
      isShow : !this.data.isShow
    })
  },
  handleIncremnt(){
    let score = this.data.score;
    if(score>94){
      this.setData({
        score:100
      })
    }else{
      this.setData({
        score: this.data.score + 6
      })
    }

  },
  handlecremnt(){
    let score = this.data.score;
    
    if(score<=6){
      this.setData({
        score:0
      })
    }else{
      this.setData({
        score: this.data.score - 6
      });
    }
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