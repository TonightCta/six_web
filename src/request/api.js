import { get, post } from './http.js'
let url = process.env.REACT_APP_BASEURL;

//用户信息
export const userInfo = p => get(url + '/race/get', p);
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
export const ContactInfo = p => get(url + '/contact/info', p);
//投资项目列表
export const ProListService = p => get(url + '/project/list', p);
//研报列表
export const ReportList = p => get(url + '/research/list', p);
//媒体 - 精选
export const MediaFeatured = p => get(url + '/medium/eliteList', p);
//媒体 - 写作
export const MediaWrite = p => get(url + '/medium/list', p);
//媒体 - 播客
export const MediaPodcast = p => get(url + '/medium/podCastList', p);
//媒体- 视频
export const MediaVideo = p => get(url + '/medium/videoList', p);
//媒体 - 详情
export const MediaDetailsSe = p => get(url + '/medium/info', p);
//下一篇媒体
export const NextMedia = p => get(url + '/medium/next',p);
//搜索
export const SearchAll = p => get(url + '/medium/searchList', p);
//订阅
export const SubscribeMsg = p => get(url + '/Subscribe/Subscribe',p);
