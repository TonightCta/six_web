import * as Type from "./action_types";

//更新用户信息
export const upUserInfo = (account) => ({
    type: Type.UP_USER_INFO,
    account
})
//更新导航栏高度
export const upNavHeight = (height) => ({
    type: Type.UP_NAV,
    height
});
//更新本地语言环境
export const changeLanguage = (language) => ({
    type: Type.CHANGE_LANGUAGE,
    language
});
//更新选中导航
export const upActiveNav = (index) => ({
    type: Type.UP_ACTIVE_NAV,
    index
});
//更新选中赛道
export const setProActiveIndex = (index) => ({
    type: Type.SET_PRO_ACTIVE,
    index
});
//更新选中赛道ID
export const setProRaceID = (id) => ({
    type: Type.SET_PRO_RACE_ID,
    id
});
//更新赛道列表
export const setRaceList = (list) => ({
    type:Type.SET_RACE_LIST,
    list
});
//更新赛道点击滚动距离
export const setRaceMoveDistance = (distance) => ({
    type:Type.MOVE_RACE_DISTANCE,
    distance
});
//更新赛道展开状态
export const setRaceOpen = (status) => ({
    type:Type.MORE_RACE_OPEN,
    status
})
//更新媒体选择类型
export const setMediaType = (media_type) => ({
    type:Type.SET_MEDIA_TYPE,
    media_type
})

