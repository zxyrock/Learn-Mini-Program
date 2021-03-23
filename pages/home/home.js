// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0

  },
  // 组件传递过来的数据对象在event中的detail中
  handleIncrement(event){
    console.log('-----',event)
    this.setData({
      counter:this.data.counter + 1;
    })
  }
})