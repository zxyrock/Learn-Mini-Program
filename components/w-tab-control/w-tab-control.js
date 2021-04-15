// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      // console.log('----',event)
      // 1.从event中取出index
      const index = event.currentTarget.dataset.index;
      // console.log(index)
      // 2.修改currentIndex的值，实现点击变色
      this.setData({
        currentIndex : index
      })

      // 3.通知页面内容的点击事件
      this.triggerEvent('itemclick',{index,title:this.properties.titles[index]},{})
    }

  }
})
