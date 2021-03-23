// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      // 第一种写法：title:类型
      // title:String
      // 第二种写法，可以设置默认值（推荐）
      title:{
        type:String,
        value:"我是默认的标题，即默认值",
        // observer:用于监听值的改变的函数
        observer:function(newVal,oldVal){
          console.log(newVal,oldVal)
        }
      }
  },
  // externalClasses:是一个数组，将要让使用组件的页面修改样式的样式名传出去
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
