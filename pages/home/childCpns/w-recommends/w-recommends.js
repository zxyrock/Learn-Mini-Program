// pages/home/childCpns/w-recommends/w-recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad(){
      if(!this.data.isLoad){
        // console.log("w-recommends组件的图片加载完成")
        // 将事件发射出去
        this.triggerEvent('imageload')
        this.data.isLoad = true
      }
      
    }
  }
})
