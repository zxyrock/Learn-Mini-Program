// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     titles:['衣服','裤子','鞋子']
  },
  handleViewClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const item = dataset.item;
    console.log(index,item)
  }
})