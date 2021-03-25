// components/my-mslot/my-mslot.js
Component({
  // options:用于定制组件的配置选项
  options:{
    // 只有将multipleSlots属性设置为true，才能使用多插槽
    multipleSlots:true,
    // styleIsolation属性用于设置样式的隔离方式
  },
  /**
   * 组件的属性列表，作用：让使用者可以给组件传入数据
   */
  properties: {
  title:{
    type:String,
    value:"",
    // observer:用于监听值的改变的函数
    observer:function(newVal,oldVal){
      console.log(newVal,oldVal)
    }
  }

  },

  /**
   * 组件的初始数据，作用：定义组件内部的初始化数据
   */
  data: {
     counter:0
  },

  /**
   * 组件的方法列表，作用：用于定义组件内部的函数的
   */
  methods: {
    Sum(num1,num2){
      console.log(num1 + num2)
    }
  },
  // externalClasses,外界给组件传入额外的样式
  externalClasses:[],
  //observers,可以监听properties/data的改变
  observers:{
    // 可以监听counter的值的改变，并传入最新的值，但这里不能传入旧值，只有newVal，没有oldVal
    counter:function(newVal){
      console.log(newVal)
    }
  },
  // --------组件中监听生命周期函数（分为两种：页面的和组件的）---------
  // 1.监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面显示出来的")
    },
    hide(){
      console.log("监听组件所在页面隐藏起来时")
    },
    resize(){
      console.log("监听组件所在页面尺寸的改变")
    }
  },
  // 2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log("组件被创建出来时")
    },
    attached(){
      console.log("组件被添加到页面中")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移动到节点的另一个位置")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }
})
