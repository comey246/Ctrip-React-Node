import forge from "node-forge";
import md5 from "js-md5";
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
/**
 * @description RSA加密
 * @param {String} publicKeyPem 公钥
 * @param {String} password 密码
 * @returns {String} 加密明文
 */
export const encodePassword = (publicKeyPem,password) => {
    //生成md5
    const md5Password = md5(password);
    //生成公钥
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    //转utf-8
    const plaintextBytes = forge.util.encodeUtf8(md5Password);
    //rsa加密
    const encryptedBytes = publicKey.encrypt(plaintextBytes, 'RSA-OAEP', {
        md: forge.md.sha256.create()
    });
    //转base64
    const encryptedBase64 = forge.util.encode64(encryptedBytes);
    return encryptedBase64
}