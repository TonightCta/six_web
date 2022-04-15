import {
    UP_NAV, CHANGE_LANGUAGE,
    UP_ACTIVE_NAV, UP_USER_INFO,
    SET_PRO_ACTIVE,
    SET_PRO_RACE_ID,
    SET_RACE_LIST,
    MOVE_RACE_DISTANCE
} from "./action_types";

const defaultState = {
    language: window.sessionStorage.getItem('language') || 'zh-CN',//本地语言环境
    active_nav: window.sessionStorage.getItem('active_nav') || 0,//头部导航选中下标
    account: JSON.parse(sessionStorage.getItem('account')) || {},//用户信息
    nav_height: window.sessionStorage.getItem('nav_height') || 120,//头部导航高度
    active_tab_pro: window.sessionStorage.getItem('active_tab_pro') || 99,//投资项目选中赛道下标
    active_tab_pro_id: window.sessionStorage.getItem('active_tab_pro_id') || 99,//投资项目选中赛道ID
    race_list:[],//赛道列表
    race_distance:window.sessionStorage.getItem('race_distance') || 0,//赛道滚动距离
};
export default (state = defaultState, action) => {
    switch (action.type) {
        //更新用户信息
        case UP_USER_INFO:
            sessionStorage.setItem('account', JSON.stringify(action.account));
            return { ...state, account: action.account }
        //更新导航栏高度
        case UP_NAV:
            sessionStorage.setItem('nav_height', action.height)
            return { ...state, nav_height: action.height }
        //更新语言环境
        case CHANGE_LANGUAGE:
            sessionStorage.setItem('language', action.language)
            return { ...state, language: action.language }
        //更新当先选中导航下标
        case UP_ACTIVE_NAV:
            sessionStorage.setItem('active_nav', action.index)
            return { ...state, active_nav: action.index }
        //更新投资项目选中赛道
        case SET_PRO_ACTIVE:
            sessionStorage.setItem('active_tab_pro', action.index)
            return { ...state, active_tab_pro: action.index }
        //更新投资项目选中赛道 - ID
        case SET_PRO_RACE_ID:
            sessionStorage.setItem('active_tab_pro_id', action.id)
            return { ...state, active_tab_pro_id: action.id }
        //更新赛道列表
        case SET_RACE_LIST:
            return { ...state,race_list:action.list }
        //更新赛道滚动距离
        case MOVE_RACE_DISTANCE:
            sessionStorage.setItem('race_distance',action.distance)
            return { ...state,race_distance:action.distance }
        default:
            return state;
    };
}