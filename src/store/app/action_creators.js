import { UP_USER_INFO,UP_NAV,CHANGE_LANGUAGE,UP_ACTIVE_NAV } from "./action_types";

export const upUserInfo = (account) => ({
    type:UP_USER_INFO,
    account
})
export const upNavHeight = (height) => ({
    type:UP_NAV,
    height
});
export const changeLanguage = (language) => ({
    type:CHANGE_LANGUAGE,
    language
});
export const upActiveNav = (index) => ({
    type:UP_ACTIVE_NAV,
    index
})

