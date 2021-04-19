import request from "./network";

// 请求轮播图
export function getMultiData(){
  return request({
    url:"/home/multidata"
  })
}

// 请求商品数据
export function getGoogsData(type,page){
  return request({
    url:"/home/data",
    data:{
      type,
      page
    }
  })
}