import axios from 'axios';
let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

axios.defaults.timeout = 10000;//超时处理

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//请求头设置

axios.interceptors.request.use(//token验证
  config => {
    const token = flag;
    token && (config.headers.token = token);
    return config
  },
  error => {
    return new Promise.error(error);
  }
);
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      switch (res.data.code) {
        case 2000:
          resolve(res.data.data)
          break;
        case 1000:
          // Vue.prototype.$notify({ type: 'danger', message: res.data.msg })
          break;
        case 6002:
          resolve(res.data.data)
          break;
        case 6000:
          // if(flag != null){
          //   Toast('登录已失效')
          // }else{
          //   Message.error('登录已失效')
          // }
          // store.dispatch('loginIn');
          // window.loginOut();
          localStorage.clear();
          // window.location.replace(process.env.REACT_APP_RESET)
          break;
        case 7000:
          // router.push('/error')
          resolve(res.data)
          break;
        default:
          console.log(res.data.msg)
      }
    }).catch(err => {
      reject(err)
    })
  })
};
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      if (res.data.code === 6000) {
        // if(flag != null){
        //   Toast('登录已失效')
        // }else{
        //   Message.error('登录已失效')
        // }
        // store.dispatch('loginIn');
        localStorage.clear();
        // window.location.replace(process.env.REACT_APP_RESET)
      } else {
        resolve(res.data)
      }
      // switch (res.data.code) {
      //   case 2000:
      //     break;
      //   case 1000:
      //     resolve(res.data)
      //     break;
      //     Message.error(res.data.msg)
      //   default:
      //     Message.error(res.data.msg)
      // }
    }).catch(err => {
      reject(err)
    })
  })
}
