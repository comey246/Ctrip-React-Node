import forge from "node-forge";

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path, routes = [])=> {
    let result = {};
    for (let item of routes) {
        if (item.path === path) return item;
        if (item.children) {
            const res = searchRoute(path, item.children);
            if (Object.keys(res).length) result = res;
        }
    }
    return result;
};

export const encodePassword = (publicKeyPem,password) => {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const plaintextBytes = forge.util.encodeUtf8(password);
    const encryptedBytes = publicKey.encrypt(plaintextBytes, 'RSA-OAEP', {
        md: forge.md.sha256.create()
    });
    const encryptedBase64 = forge.util.encode64(encryptedBytes);
    return encryptedBase64
}