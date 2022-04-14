import { upUserInfo } from "./action_creators";
import store from "../index";
import * as api from '../../request/api';

//更新用户信息
export default async function upEvUserInfo(){
    const result = await api.userInfo();
    let action = upUserInfo(result);
    store.dispatch(action)
}