import { get, post } from './http.js'
let url = process.env.REACT_APP_BASEURL;

//赛道列表
export const trackList = p => get(url + '/race/get', p);
//注册
export const bingGoo = p => post(url + '/login/register', p);
//项目简介
export const ProDuction = p => get(url + '/brief/get', p);
//文件上传
export const UpFiles = p => post(url + '/common/upload', p);
//提交反馈
export const FeedBack = p => post(url + '/contact/add', p);
//联系我们信息
export const ContactInfo = p => get(url + '/contact/info',p);