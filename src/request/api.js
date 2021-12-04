import { get, post } from './http.js'

let url = process.env.REACT_APP_BASEURL;

//登录验证
export const isReal = p => post(url + '/login/isRealUser', p);
//获取谷歌二维码 & 私钥
export const gooKey = p => post(url + '/login/getAuth', p);
//绑定谷歌验证器
export const bingGoo = p => post(url + '/login/register', p);
//签名随机数
export const metaNonce = p => post(url + '/login/getNonce', p);
//签名验证
export const metaSign = p => post(url + '/login/signatureLogin', p);
//手机号登录
export const phoneLogin = p => post(url + '/login/mobileLogin', p);
//登录
export const loginIn = p => post(url + '/login/login', p);
//是否绑定邀请码
export const isBindCode = p => get(url + '/user/IsShowCode', p);
//生成邀请码
export const createCode = p => post(url + '/user/CreateCode', p);
//绑定邀请码
export const bindCode = p => post(url + '/user/ConfirmInviteCode', p);
//放弃绑定邀请码
export const giveUpCode = p => post(url + '/user/giveUpCode', p);
//邀请码是否可用
export const isByCode = p => post(url + '/user/codeIsAvailable', p);
//新闻列表
export const newsList = p => get(url + '/article/ArticlePageData', p);
//置顶新闻
export const topNews = p => get(url + '/article/top', p);
//推荐阅读
export const recommendNews = p => get(url + '/article/recommend', p);
//文章分类
export const typeNews = p => get(url + '/article/type', p);
//文章标签
export const tagNews = p => get(url + '/article/tag', p);
//新闻详情
export const newDetails = p => get(url + '/article/info', p)
//赛道月报
export const monthList = p => get(url + '/product/getReportList', p);
//赛道列表
export const trackList = p => get(url + '/product/getRace', p);
//项目简称
export const proNameList = p => get(url + '/product/ProjectNameList', p)
//新币速递
export const coinList = p => get(url + '/coin/coinList', p);
//新币赛道
export const coinRaceList = p => get(url + '/coin/RaceList', p);
//套餐列表
export const priceList = p => get(url + '/order/MealList', p)
//获取用户信息
export const userInfo = p => get(url + '/user/info', p)
//发送手机号验证码
export const sendMobileCode = p => post(url + '/user/sendSms', p)
//绑定手机号
export const bindMobile = p => post(url + '/user/bindMobile', p)
//换绑手机
export const changeBindMobile = p => post(url + '/user/changeMobile', p);
//发送邮箱验证码
export const sendEmailCode = p => post(url + '/user/sendEmail', p);
//绑定邮箱
export const bindEmail = p => post(url + '/user/bindEmail', p);
//换绑邮箱
export const changeBindEmail = p => post(url + '/user/changeEmail', p);
//绑定旧帐号
export const bindUsed = p => post(url + '/user/bindPlatform', p);
//反馈建议
export const submitFeedback = p => post(url + '/user/submitFeedback', p)
//项目库
export const library = p => get(url + '/kbs/getKbs', p);
//项目库详情
export const libraryDetails = p => get(url + '/kbs/getKbsInfo', p);
//获取当前订单价格
export const mealInfo = p => get(url + '/v2/order/getMealInfo', p);
//获取公链信息
export const chainList = p => get(url + '/v2/order/getChainList', p);
//切换公链
export const choseChain = p => get(url + '/v2/order/switchChain', p);
//查询转账结果
export const queryChain = p => post(url + '/v2/order/transferOrder', p);
//生成订单
export const creatOrder = p => post(url + '/v2/order/placeOrder', p);
//获取支付信息
export const payMsg = p => post(url + '/v2/order/unifiedOrder', p);
//绑定交易Hash
export const bindHash = p => post(url + '/v2/order/bindOrderHash', p);
//查询支付结果
export const payOver = p => get(url + '/v2/order/queryOrder', p);
//查询转账支付金额
export const transInfo = p => get(url + '/v2/order/getTransferInfo', p);
//微信下单
export const wePay = p => post(url + '/v2/order/wechatPay', p);
//查询微信支付结果
export const payWechat = p => get(url + '/v2/order/queryStatus', p);
//用户订单
export const userOrder = p => get(url + '/user/orderlist1', p);
//订单详情
export const orderDetails = p => get(url + '/user/orderinfo1', p);
//取消订单
export const cancelOrder = p => post(url + '/order/cancelOrder', p);
//全局搜索
export const searchAll = p => get(url + '/search', p);
//调研项目列表
export const projectList = p => get(url + '/project/getProjectList', p);
//重大事件
export const eventProject = p => get(url + '/product/getEventListByProject', p);
//工单现状
export const situation = p => get(url + '/workorder/Situation', p);
//剩余咨询条数
export const userMeal = p => get(url + '/workorder/meal', p)
//用户工单列表
export const serviceList = p => get(url + '/workorder/list', p);
//提交工单
export const addService = p => post(url + '/workorder/AddWorkOrder', p);
//工单详情
export const serviceDetails = p => get(url + '/workorder/info', p);
//沟通记录
export const msgList = p => get(url + '/workorder/message', p);
//提交回复
export const sendReplay = p => post(url + '/workorder/addreply', p);
//结束工单
export const endWork = p => post(url + '/workorder/end', p);
//提交评价
export const subCom = p => post(url + '/workorder/AddEvaluate', p);
//获取评价
export const getCom = p => get(url + '/workorder/evaluate', p);
//获取七牛云token
export const qiToken = p => get(url + '/user/getQiniuToken', p);
//微信分享
export const share = p => get(url + '/wechat/share', p);
//查询历史工单
export const historyWork = p => get(url + '/workorder/search', p);
//查询token是否有效
export const tokenStatus = p => get(url + '/user/is_login', p);
//创建海报
export const createPoster = p => post(url + '/activity/createCode', p);
//活动奖励列表
export const posterReward = p => get(url + '/activity/prizeList', p);
//活动排行榜
export const posterRank = p => get(url + '/activity/RankList', p);
//消息列表
export const messageList = p => get(url + '/message/MessageList', p);
//已读当前消息
export const readMessageNow = p => post(url + '/message/read', p);
//全读消息
export const readMessage = p => post(url + '/message/allRead', p);
//新消息状态
export const newMessage = p => get(url + '/message/UnreadNum', p);
//删除消息
export const delMessage = p => post(url + '/message/del', p);
//赛道解析分类
export const raceType = p => get(url + '/race/RaceList', p);
//赛道解析列表
export const raceList = p => get(url + '/race/RaceAnalysisList', p);
//下个研报发布时间
export const nextProject = p => get(url + '/project/getNextPublishTime', p);
//最新发布的研报
export const newProject = p => get(url + '/project/getNewReportList', p);
//赠送的项目解析
export const giveProject = p => get(url + '/project/getGiftProjectList', p);
//赠送的新币速递
export const giveCoin = p => get(url + '/coin/GiftCoinList', p);
//赠送的重大事件
export const giveEvent = p => get(url + '/project/getGiftEventList', p);
//赠送的赛道解析
export const giveRace = p => get(url + '/race/GiftRaceAnalysisList', p);
//我的咨询
export const myService = p => get(url + '/workorder/mylist', p);
//推荐项目
export const recommend = p => get(url + '/project/getRecommendProduct', p);
//未读项目解析
export const unReadProject = p => get(url + '/project/getUnreadProject', p);
//未读新币速递
export const unReadCoin = p => get(url + '/project/getUnreadCoin', p);
//未读重大事件
export const unReadEvent = p => get(url + '/project/getUnreadEvent', p);
//未读赛道解析
export const unReadRace = p => get(url + '/project/getUnreadRace', p);
//已读全部推荐
export const readAllRecomand = p => post(url + '/project/setAllRead', p);
//已读当前
export const readNow = p => post(url + '/project/setSingleRead', p);
//用户邀请列表
export const InviteMsg = p => get(url + '/user/inviteData', p);
//用户邀请数据
export const InviteNumber = p => get(url + '/user/inviteCount', p);
//暴富指数
export const richMsg = p => get(url + '/project/getData', p);
//最新发布的产品
export const lastProject = p => get(url + '/project/getLatestProduct', p);
//未读条数
export const unReadCount = p => get(url + '/project/getUnreadProductCount', p);
//未读面板
export const unReadList = p => get(url + '/project/getUnreadProduct', p);
//项目解析赛道
export const projectRace = p => get(url + '/project/getRaceList', p);
//客服微信
export const contactQR = p => get(url + '/customerservice/CustomerServiceCode', p);
//项目解析详情
export const projectDetails = p => get(url + '/project/getProjectInfo', p);
//代币分发规则
export const coinLssue = p => get(url + '/project/regularRules', p);
//社交活跃度
export const coinActive = p => get(url + '/project/community', p);
//代币分布
export const coinType = p => get(url + '/project/getTokenDistributed', p);
//项目解析重大事件
export const proEvent = p => get(url + '/project/getEventList', p);
//项目解析相关咨询
export const proService = p => get(url + '/project/getKbsList', p);
//链闻快讯
export const proNews = p => get(url + '/project/getChainNews', p);
//我们的成绩
export const ourAchievement = p => get(url + '/index/OurAchievement', p);
//是否为新会员
export const isNewVip = p => get(url + '/index/IsNew', p);
//绑定钱包地址
export const bindAddress = p => post(url + '/user/bindAddress', p);
//渠道商统计数据
export const busiNessTotal = p => get(url + '/distributor/DistributorData', p);
//渠道商列表数据
export const busiNessList = p => get(url + '/distributor/distributorList', p);
//渠道商导出数据
export const busiNessExit = p => get(url + '/distributor/export', p);
//退出登录
export const loginOut = p => post(url + '/user/loginOut', p);
//不再提醒桌面提示
export const noLongerTip = p => get(url + '/user/NoShowDeskTip', p);
//开启一日游
export const openTry = p => get(url + '/user/oneDayTry', p);
//一日游状态
export const tryStatus = p => get(url + '/user/oneDayTryStatus', p);
//合作统计
export const outsideClick = p => get(url + '/cooperate/AddCooperateWebPV', p);
//PDF指纹追加
export const PDFLockFinger = p => get(url + '/pdf/previewPdf', p);
//公告
export const Announcement = p => get(url + '/announcement/Announcement',p);
//已读公告
export const readAnn = p => post(url + '/announcement/AnnouncementRead',p);
//我的情报局 - 项目数统计
export const totalMineBureau = p => get(url + '/myinfo/count',p);
//我的情报局 - 到期时间
export const expireDate = p => get(url + '/myinfo/expire',p);
//我的情报局 - 最新 & 最热项目
export const proMineBureau = p => get(url + '/myinfo/Projects',p);
//我的情报局 - 最新研究员观点
export const angMineBureau = p => get(url + '/myinfo/NewAnalysis',p);
//我的情报局 - 即将发生的事件
export const evMineBureau = p => get(url + '/myinfo/soonFuture',p);
//情报局项目
export const trackPro = p => get(url + '/infoproject/ProjectList',p);
//情报局数量
export const infoTotal = p => get(url + '/infoproject/ProjectCount',p);
//情报局全部已读
export const realAllInfo = p => post(url + '/inforead/all',p);
//情报局已读
export const readInfo = p => post(url + '/inforead/read',p);
//自选数量
export const trackCount = p => get(url + '/infoproject/count',p);
//自选项目
export const addTrack = p => post(url + '/infoproject/follow',p);
//自选项目详情
export const trackDetails = p => get(url + '/infoproject/ProjectInfo',p);
//提案列表
export const posalList = p => get(url + '/proposal/ProposalList',p);
//提案数量信息
export const posalCount = p => get(url + '/proposal/ProposalCount',p);
//未来事件列表
export const eventsFutureList = p => get(url + '/future/list',p);
//点赞 or 踩
export const likeOrUn = p => post(url + '/info/like',p);
//情报局审核列表
export const BAList = p => get(url + '/check/list',p);
//情报局审核状态修改
export const changeBA = p => post(url + '/check/status',p);
//情报局添加未来事件日期
export const BAPushDate = p => post(url + '/check/future',p);
//情报局登录
export const BALogin = p => post(url + '/check/login',p);
//情报局统计
export const BATotal = p => get(url + '/check/count',p);
//情报列表
export const BAShowList = p => get(url + '/info/list',p);
//内容详情
export const infoContent = p => get(url + '/info/content',p);
//内容详情 - 中
export const infoContentZh = p => get(url + '/info/contentZh',p);
//切换邀请码奖励
export const changeReward = p => post(url + '/user/codeReward',p);
//Discord选项卡
export const disTabs = p => get(url + '/discord/typeList',p);
//Discord列表
export const disList = p => get(url + '/discord/list',p);
//Discord完整对话
export const disDetails = p => get(url + '/discord/all',p);
//不再显示邀请码奖励设置
export const hideReward = p => get(url + '/user/NoRewardTip',p);
//添加 & 删除  日历
export const addCalendar = p => post(url + '/future/minus',p);
//我的日历
export const myCalendar = p => get(url + '/future/calendar',p);
//订阅地址
export const subUrl = p => get(url + '/future/calendarICS',p);
//已读类型
export const readType = p => post(url + '/inforead/type',p);