module.exports = {
    // 开发以及部署时的URL
    publicPath: '',
    // 生产环境构建文件的目录名
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    // 开发环境每次保存时是否输出为eslint编译警告
    lintOnSave: false,
     //开发环境端口号
    devPort: '8090',
        //版本号
        version: process.env.VUE_APP_VERSION,

    // 默认的接口地址 如果是开发环境和生产环境走vab-mock-server，当然你也可以选择自己配置成需要的接口地址
    baseURL:
    ['production', 'prod'].includes(process.env.NODE_ENV)
        ? 'http://127.0.0.1:3000/super'
        : 'http://127.0.0.1:3000/super',
    //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
    title: 'vue-vant-mobile-cli',
    //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
    contentType: 'application/json;charset=UTF-8',
    //消息框消失时间
    messageDuration: 3000,
    //最长请求时间
    requestTimeout: 5000,
    //操作正常code，支持String、Array、int多种类型
    successCode: [200],
    //登录失效code
    invalidCode: 402,
    //无权限code
    noPermissionCode: 401,
}
