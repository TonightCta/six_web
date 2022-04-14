import { UP_NAV, CHANGE_LANGUAGE, UP_ACTIVE_NAV, UP_USER_INFO } from "./action_types";

const defaultState = {
    language: window.sessionStorage.getItem('language') || 'zh-CN',
    active_nav: window.sessionStorage.getItem('active_nav') || 0,
    account: JSON.parse(sessionStorage.getItem('account')) || {},
    nav_height: window.sessionStorage.getItem('nav_height') || 120,
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
        default:
            return state;
    };
}