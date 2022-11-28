//在这个文件中做项目的运行时配置
//异步请求相关运行时配置
export const request = {
  requestInterceptors: [ //请求拦截
    (url: any, options: any) => {
      console.log('请求拦截器', url, options)
      return options; //此处return的内容就是自定义请求配置
    }
  ],
  responseInterceptors: [   //相应拦截
    (response: any, options: any) => {
      console.log('响应拦截器', response, options)
      return response;   //此处return的内容后端下发的包
    }
  ],
}
