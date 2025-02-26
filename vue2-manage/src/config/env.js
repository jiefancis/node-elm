/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
const isDev = process.env.NODE_ENV == "development";
let baseUrl = isDev ? "" : "//elm.cangdu.org";
let routerMode = "hash";
let baseImgPath = isDev ? "/img/" : "//elm.cangdu.org/img/";

export { baseUrl, routerMode, baseImgPath };
