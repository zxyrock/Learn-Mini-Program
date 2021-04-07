// pages/home/home.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  handleShowToast(){
    wx.showToast({
      // title:设置弹窗显示内容,文本最多显示 7 个汉字长度
      title: '加载中...',
      // duration:设置弹窗显示时间
      duration:3000,
      // icon:设置显示的图标，微信提供了一些图标
      icon:'loading',
      //mask:	是否显示透明蒙层，防止触摸穿透,设置为true则在显示弹窗时，其他不能进行点击
      mask:true,
      // success：接口调用成功的回调函数
      success:function(){
        console.log('弹窗展示成功')
      },
      // fail：接口调用失败的回调函数
      fail:function(){
        console.log('弹窗展示失败')
      },
      // complete：接口调用结束的回调函数（调用成功、失败都会执行）
      complete:function(){
        console.log('不管成功还是失败都会调用complete函数，即接口调用完成')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content:'我是内容：Hello World',
      // showCancel:是否显示取消按钮
      showCancel:true,
      // cancelText：设置取消按钮的文字，最多 4 个字符
      cancelText:'退出',
      // cancelColor:取消按钮的文字颜色
      cancelColor:'red',
      // success：接口调用成功的回调函数
      success:function(res){
        console.log(res)
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
        if(res.concel){
          console.log('用户点击了取消按钮')
        }
      }
    })
  },
  handleShowLoading(){
    // wx.showLoading不会主动消失
    wx.showLoading({
      title: '加载ing',
      mask:true
    })
    // 必须手动调用 wx.hideLoading函数才会让wx.showLoading的弹窗消失
    setTimeout(()=>{
      wx.hideLoading({
        success: (res) => {},
      })
    },1000)
  },
  handleActionSheet(){
   wx.showActionSheet({
     itemList: ['相册','拍照'],
     itemColor:'red',
     success:function(res){
       console.log(res)
     }
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // -----1.发送网络请求(原生方式，太古老)------
    this.get_data_origin()
    // -----2.使用封装的request发送网络请求
    request({
      url:"https://api.apiopen.top/getJoke?",
      data:{
        page:1,
        count:2,
        type:'video'
      }
    }).then(res =>{
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

   
  },
  get_data_origin(){
    // wx.request({
    //   // 第一种写法：直接将网址写上
    //   // url:'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
    //   // 第二种写法:将网址拆分，用data拼接
    //   url: 'https://api.apiopen.top/getJoke?',
    //   // method:用于设置请求方式，默认为get请求
    //   // method:'POST'
    //   data:{
    //     page:1,
    //     count:2,
    //     type:'video'
    //   },
    //   // success:成功的回调
    //   success:function(res){
    //     console.log(res)
    //   },
    //   // fail:失败的回调
    //   fail:function(err){
    //     console.log(err)
    //   },
    //   // complete:接口调用完后会回调，不论成功还是调用失败
    //   complete:function(){
    //     console.log('---')
    //   }
    // })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (options) {
    return {
      title:'转发时显示的标题',
      // path:转发路径，必须是以/开头的完整路径
      path:'/pages/home/home.wxml',
      // imageUrl:自定义展示图片的路径，默认是截图，显示长宽比为5:4
      imageUrl:'../../asset/img/rock.jpg'
    }
  }
})