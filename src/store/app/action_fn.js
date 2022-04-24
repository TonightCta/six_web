import { upUserInfo,setReadID } from "./action_creators";
import store from "../index";
import * as api from '../../request/api';

//更新用户信息
export const upEvUserInfo = async () => {
    const result = await api.userInfo();
    let action = upUserInfo(result);
    store.dispatch(action)
};
//更新当前阅读文章ID
export const setReadIDEv = (_id) => {
    const action = setReadID(_id);
    store.dispatch(action);
};