// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0,
    isShow:true
  },
  // 组件传递过来的数据对象在event中的detail中
  handleIncrement(event){
    console.log('-----',event)
    this.setData({
      counter:this.data.counter + 1
    })
  },
  tabControlClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    // console.log("--------")
    // 最终目的：修改my-sel组件中的counter数据
    // 1.先获组件对象的方法：this.selectComponent("组件对象绑定的class或id")
    const my_sel = this.selectComponent('.sel-class')
    // console.log(my_sel)
    // 2.通过setData()来修改组件中的数据，但这种方式不合理，因为这是直接修改组件内的数据，
    // 若是其他页面也用该组件的此数据，会一起造成影响
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })

    // 3.通过调用组件自己的方法对数据进行修改
    my_sel.incrementCounter(10)
  },
  handleChangeShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
})