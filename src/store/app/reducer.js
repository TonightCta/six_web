import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./action_types";
/**
 * reducer暴露出去的就是一个方法函数,有两个参数：state 和 action。
 * state: 是整个项目中需要管理的数据信息。
 */

/**
 * 一定要注意： reducer里只能接收state，不能改变state。
 * 不要认为把业务逻辑写在了reducer中，那改变state值的一定是reducer。
 * 其实不然，reudcer只是返回了更改的数据，操作的是newState，但是并没有更改store中的state数据，store拿到了reducer的数据，自己对自己进行了更新。
 */
const defaultState = {
    language: window.sessionStorage.getItem('language') || 'zh-CN',
    active_nav: window.sessionStorage.getItem('active_nav') || 0,
    account:{},
};
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState = Object.assign(newState, action.value);
        for (let key in action.value) {
            window.sessionStorage.setItem(key, action.value[key]);
        }
        return newState;
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    };
    return state;
}