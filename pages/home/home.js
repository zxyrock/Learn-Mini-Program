// pages/home/home.js
import {
  getMultiData
}from "../../service/home.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.页面加载完，立刻发送网络请求，请求数据
    // 1.1 请求轮播图数据以及推荐数据
    getMultiData().then(res => {
      // 1.2 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      // 1.3 将请求到的banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })

    }).catch(err => {
      wx.showToast({
        title: '加载出错',
        icon:"loading",
        duration:3000
      })
    }) 

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