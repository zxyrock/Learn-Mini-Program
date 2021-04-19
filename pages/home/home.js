// pages/home/home.js
import {
  getMultiData,
  getGoogsData
}from "../../service/home.js"

// 请求的类型
const types =['pop','new','sell']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    // 用于记录商品请求的类型，默认是流行的pop
    currentType:'pop'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.页面加载完，立刻发送网络请求，请求数据
    this._getMultidata()

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')


  },

  // -------------网络请求函数---------------
  // 1.自定义请求轮播图函数
  _getMultidata(){
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
  // 2.自定义请求商品数据函数
  _getGoodsData(type){
    // 2.1.获取页码
    const page = this.data.goods[type].page + 1

    //2.2.发送网络请求
    getGoogsData(type,page).then(res => {
      // console.log(res)
      // 2.2.1.取出数据list
      const list = res.data.data.list;

      // 2.2.2.将数据设置到对应type的list里（...语法）
      const oldList = this.data.goods[type].list;
      oldList.push(...list)

      // 2.2.3. 将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page
      })
    })


  },


  // -----------------事件监听函数-----------------
  tabControlClick(event){
    // 1.取出index
     const index = event.detail.index;
    //  console.log(index)

    // 2.通过index设置currentType
    this.setData({
      currentType:types[index]
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