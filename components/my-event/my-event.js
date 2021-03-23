// components/my-event/my-event.js
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
    handleIncrement(){
      // console.log('--1--')
      // 发射事件：this.triggerEvent({给要发射的事件起的名字},{数据},{额外选项})
      this.triggerEvent('increment',{name:'zxyrock',age:18},{})
    }
  }
})
