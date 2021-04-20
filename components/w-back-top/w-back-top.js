// components/w-back-top/w-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBackTop(){
      // console.log('---')
      // wx.pageScrollTo()方法：将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
      // 注：该方法在模拟器上使用有时会失灵，但在真机上无误
      wx.pageScrollTo({
        scrollTop:0,
        duration: 300,
      })
    }

  }
})
