// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 事件的冒泡和捕获
  handleCaptureView1() {
    console.log("监听到最外层view1的捕获事件")
  },
  handleBindView1() {
    console.log("监听到最外层view1的冒泡事件")
  },
  handleCaptureView2() {
    console.log("监听到中层view2的捕获事件")
  },
  handleBindView2() {
    console.log("监听到中层view2的冒泡事件")
  },
  handleCaptureView3() {
    console.log("监听到最内层view3的捕获事件")
  },
  handleBindView3() {
    console.log("监听到最内层view3的冒泡事件")
  }
})