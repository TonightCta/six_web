import * as Type from "./action_types";

const defaultState = {
    language: window.sessionStorage.getItem('language') || 'zh-CN',//本地语言环境
    active_nav: window.sessionStorage.getItem('active_nav') || 0,//头部导航选中下标
    account: JSON.parse(sessionStorage.getItem('account')) || {},//用户信息
    nav_height: window.sessionStorage.getItem('nav_height') || 120,//头部导航高度
    active_tab_pro: window.sessionStorage.getItem('active_tab_pro') || 99,//投资项目选中赛道下标
    active_tab_pro_id: window.sessionStorage.getItem('active_tab_pro_id') || 99,//投资项目选中赛道ID
    race_list: [],//赛道列表
    race_distance: window.sessionStorage.getItem('race_distance') || 0,//赛道滚动距离
    race_open: window.sessionStorage.getItem('race_open') || 0,//赛道展开状态
    media_type: window.sessionStorage.getItem('media_type') || 99,//媒体子类型
    different_type:window.sessionStorage.getItem('different_type') || 0,//特殊导航状态
    nav_shadow:1,
    search_val:window.sessionStorage.getItem('search_val') || "",
};
export default (state = defaultState, action) => {
    switch (action.type) {
        //更新用户信息
        case Type.UP_USER_INFO:
            sessionStorage.setItem('account', JSON.stringify(action.account));
            return { ...state, account: action.account }
        //更新导航栏高度
        case Type.UP_NAV:
            sessionStorage.setItem('nav_height', action.height)
            return { ...state, nav_height: action.height }
        //更新语言环境
        case Type.CHANGE_LANGUAGE:
            sessionStorage.setItem('language', action.language)
            return { ...state, language: action.language }
        //更新当先选中导航下标
        case Type.UP_ACTIVE_NAV:
            sessionStorage.setItem('active_nav', action.index)
            return { ...state, active_nav: action.index }
        //更新投资项目选中赛道
        case Type.SET_PRO_ACTIVE:
            sessionStorage.setItem('active_tab_pro', action.index)
            return { ...state, active_tab_pro: action.index }
        //更新投资项目选中赛道 - ID
        case Type.SET_PRO_RACE_ID:
            sessionStorage.setItem('active_tab_pro_id', action.id)
            return { ...state, active_tab_pro_id: action.id }
        //更新赛道列表
        case Type.SET_RACE_LIST:
            return { ...state, race_list: action.list }
        //更新赛道滚动距离
        case Type.MOVE_RACE_DISTANCE:
            sessionStorage.setItem('race_distance', action.distance)
            return { ...state, race_distance: action.distance }
        //更新赛道展开状态
        case Type.MORE_RACE_OPEN:
            sessionStorage.setItem('race_open', action.status)
            return { ...state, race_open: action.status }
        //更新媒体类型
        case Type.SET_MEDIA_TYPE:
            sessionStorage.setItem('media_type', action.media_type)
            return { ...state, media_type: action.media_type }
        //更新文章导航
        case Type.SET_DIFFERENT_NAV:
            sessionStorage.setItem('different_nav',action.nav_type)
            return { ...state,different_type:action.nav_type }
        //更新导航阴影状态
        case Type.SET_NAV_SHADOW:
            return { ...state,nav_shadow:action.status }
        //更新搜索内容
        case Type.SET_SEARCH_VALUE:
            sessionStorage.setItem('search_val',action.value)
            return { ...state,search_val:action.value }
        default:
            return state;
    };
}