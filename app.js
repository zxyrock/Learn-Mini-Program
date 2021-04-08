// 将token设置成常量
const TOKEN = 'token';

App({
  // 设置全局数据，方便其他页面拿到数据
  // 但对象在小程序关闭后会被回收，所以token还要保存到本地中，避免用户频繁登录
  globalData:{
    token:''
  },
  onLaunch:function(){
    // 1.判断用户有没有登录过，即先从缓存中取出token，若取不出，则用户没登录过，或token已失效
    const token = wx.getStorageSync(TOKEN)

    // 2.判断token是否有值，并且长度不为0
    if(token && token.length !== 0){
      // 3.已经有token，验证该token是否过期
      this.check_token()
    }else{
       // 没有token，让用户进行登录操作
       this.login()
    }
  },
  // 自定义验证token是否过期函数
  check_token(token){
    console.log('执行了验证token操作')
   wx.request({
     url: 'http:123.207.32.32:3000/auth',
     method:'POST',
     // header：请求头
     header:{
       token
     },
     success:(res) => {
       console.log(res)
       // 如果请求到了token，没问题
       if(!res.data.errCode){
         console.log('tokeny有效')
         this.globalData.token = token
       }else{
        console.log('tokeny无效')
         // 如果token有问题，则再做一次登录操作
         this.login()
       }
     },
     fail:(err) => {
       console.log(err)

     }
   })
  },
  // 自定义登录方法
  login(){
    console.log('执行了登录操作')
    // 登录操作
    wx.login({
      // res中的code只有五分钟的有效期，我们需要在这5分钟内把code发给
      // 开发服务器，让开发服务器发给微信服务器换取openid,否则5分钟失效后，用户需要重新登录
      success:(res)=>{
       //  console.log(res)
       // 1.获取code
       const code = res.code;
       // 2.将code发送给发给我们的服务器
       wx.request({
         url: 'http://123.207.32.32:3000/login',
         method:'post',
         // data里写需要传递的信息，一般都还需要传递用户的账号和密码
         data:{
           code
         },
         success:(res)=>{
          // 1.取出token
          const token = res.data.token;

          // 2.将token保存glodalData中的token
          this.globalData.token = token;
          console.log(this.globalData.token) 

          // 3.将token进行本地存储
          wx.setStorageSync(TOKEN, token)

         }
       })
      },
     //  timeout: ,
    })
  }
})