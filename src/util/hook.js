import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(timeout)
        }
    }, [value, delay]);
    return debounceValue;
};

// const contactChain = async () => {
//     let api: ApiPromise;
//     const provider = new WsProvider('ws:...');
//     const { queuePayload, queueSetTxStatus } = useContext(StatusContext);
//     const signer = new ApiSigner(registry, queuePayload, queueSetTxStatus);
//     const types = getDevTypes();
//     /**
//      * @param provider  注入链地址
//      * @param registry  创建注入说明
//      * @param signer    签名注入
//      * @param types     注入类型
//      * @param typesBundle  注入捆绑类型
//      * @param typesChain   注入类型链
//     */
//     api = new ApiPromise({ provider, registry, signer, types, typesBundle, typesChain });

//     api.on('connected', () => console.log('已连接'))
//     api.on('disconnected', () => console.log('断开链接'))
//     api.on('error', () => console.log('连接错误'))
//     api.on('ready', (): void => {
//         console.log('连接就绪,可执行操作');
//         const defaultChainHash = api.genesisHash.toHex() // 当前链初始哈希值
//     })
// }