// components/my-style/my-style.js
Component({
  options:{
    // 样式隔离：styleIsolation，默认值为isolated，即组件内外的class样式相互不影响
    // styleIsolation:"isolated"
    // 当值为apply-shared时，页面的样式会对组件的class造成影响，但组件内的样式不会影响到页面
    // styleIsolation:"apply-shared"
    // 当值为apply-shared时，组件的样式会对页面的class造成影响，但页面内的样式不会影响到组件
    styleIsolation:"shared"
  },
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

  }
})
