// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBtnClick(){
    console.log('按钮被点击')
  },
  handleTouchStart(){
    console.log("开始触摸")
  },
  handleTouchMove(){
    console.log("手指开始移动")
  },
  handleTouchEnd(){
    console.log("手指结束触摸")
  },
  handleLongPreess(){
    console.log("手指按的时间超过350ms")
  }
})