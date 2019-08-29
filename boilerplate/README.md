# {{name}}

基于[EggJS](https://eggjs.org/zh-cn/)的企业内部框架

{{description}}

## 技术选型
### 数据库
- 文档型数据库：[MongoDB](https://www.mongodb.com/)
- 高性能缓存：[Redis](https://redis.io/)
- 对象云存储：[OSS](https://www.aliyun.com/product/oss/)

### 插件
- 表单验证插件：[egg-validate](https://github.com/eggjs/egg-validate)
- 跨域设置插件：[egg-cors](https://github.com/eggjs/egg-cors)
- 国际化插件：[egg-i18n](https://github.com/eggjs/egg-i18n)

### 辅助
- 性能监控平台：[alinode](https://cn.aliyun.com/product/nodejs)
- 时间处理工具库：[momentjs](https://momentjs.com/)

## 如何使用
### 安装模块

```bash
npm i egg-tell-basic
```

### 引入框架

在 **package.json** 指定 **egg.framework**，默认为 **egg**

```json
{
  "egg": {
    "declarations": true,
    "framework": "egg-tell-basic"
  },
  "dependencies": {
    "egg": "^2.15.1",
    "egg-scripts": "^2.11.0",
    "egg-tell-basic": "^1.0.5"
  },
}
```
### 添加配置

指定[配置文件](https://eggjs.org/zh-cn/basics/config.html)覆盖数据库地址

```javascript
// 文档型数据库
config.mongoose = {
    url: 'mongodb://localhost:27017/teller',
    options: {
        useNewUrlParser: true,
        autoIndex: true,
        useCreateIndex: true,
    },
};

// 高性能缓存
config.redis = {
    client: {
        host: process.env.EGG_REDIS_HOST || '127.0.0.1',
        port: process.env.EGG_REDIS_PORT || 6379,
        password: process.env.EGG_REDIS_PASSWORD || '',
        db: process.env.EGG_REDIS_DB || '10',
    },
};

// 安全设置
config.security = {
    domainWhiteList: [],
    csrf: {
      enable: false,
    },
};

// 性能监控
config.alinode = {
    appid: '',
    secret: '',
};

// 国际化
config.i18n = {
    defaultLocale: 'zh-CN',
};
```

### 默认插件配置
- [X] mongoose: 数据库
- [X] redis: 缓存
- [X] validate: 表单验证
- [ ] cors: 跨域设置
- [ ] alinode: 性能监控
- [X] mp: 微信公众平台

## 集成开发环境
建议使用[VSCode](https://code.visualstudio.com/)，并添加如下扩展
- [eggjs](https://marketplace.visualstudio.com/items?itemName=atian25.eggjs)，本地调试应用
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)，检测代码质量
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)，美化大纲排版