import {
    UP_USER_INFO,
    UP_NAV, CHANGE_LANGUAGE,
    UP_ACTIVE_NAV,
    SET_PRO_ACTIVE,
    SET_PRO_RACE_ID,
    SET_RACE_LIST,
    MOVE_RACE_DISTANCE,
} from "./action_types";

//更新用户信息
export const upUserInfo = (account) => ({
    type: UP_USER_INFO,
    account
})
//更新导航栏高度
export const upNavHeight = (height) => ({
    type: UP_NAV,
    height
});
//更新本地语言环境
export const changeLanguage = (language) => ({
    type: CHANGE_LANGUAGE,
    language
});
//更新选中导航
export const upActiveNav = (index) => ({
    type: UP_ACTIVE_NAV,
    index
});
//更新选中赛道
export const setProActiveIndex = (index) => ({
    type: SET_PRO_ACTIVE,
    index
});
//更新选中赛道ID
export const setProRaceID = (id) => ({
    type: SET_PRO_RACE_ID,
    id
});
//更新赛道列表
export const setRaceList = (list) => ({
    type:SET_RACE_LIST,
    list
});
//更新赛道点击滚动距离
export const setRaceMoveDistance = (distance) => ({
    type:MOVE_RACE_DISTANCE,
    distance
})

