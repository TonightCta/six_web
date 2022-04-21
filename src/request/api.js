import { get, post } from './http.js'
let url = process.env.REACT_APP_BASEURL;

//赛道列表
export const trackList = p => get(url + '/product/getRace', p);
//注册
export const bingGoo = p => post(url + '/login/register', p);
//项目简介
export const ProDuction = p => get(url + '/brief/get',p);
