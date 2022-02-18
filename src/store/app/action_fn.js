import { changeInputAction } from "./action_creators";
import store from "../index";
import * as api from '../../request/api';

//更新用户信息
export default async function upUserInfo(){
    const result = await api.userInfo();
    let action = changeInputAction({account:JSON.stringify(result)});
    store.dispatch(action)
}