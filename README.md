
### command
###### 启动项目
`npm start` 或者 `npm run dev`
###### 启动项目后自动打开浏览器(传入 --o 参数)
`npm start --o` 或者`npm start --open`
###### 打包项目
`npm run build`
###### 打包项目并查看分析项目大小
`npm run build --a`
### config
`config`目录下的`index.js`文件为项目webpack配置文件，包括有运行端口、地址、本地服务代理配置等一系列配置。

| 名称  | 类型  | 描述  |
| ------------ | ------------ | ------------ |
|  host |String   |  主机 |
| port  | Number  | 端口  |
| proxyTable  | Object  | 代理配置  |
| useEslint  | Boolean  | 是否使用eslint  |
| autoOpenBrowser  | Boolean  | 是否自动打开浏览器  |
| errorOverlay  | Boolean  | 是否使用全屏报错提示  |
|  notifyOnErrors | Boolean  | 是否使用消息通知  |
| showEslintErrorsInOverlay  | Boolean  | 是否使用eslint全屏报错提示  |
| bundleAnalyzerReport  | Boolean  | 是否使用打包编译完成后显示依赖分析  |
# react-checkbox

无限层级的父子关系树状结构，自动处理层级关系，自动处理所有节点的checked状态。

预览图

![demo](https://github.com/luckydogM/react-checkbox/blob/master/demo.png "demo")
