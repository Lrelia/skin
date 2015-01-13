### 环境说明
***
1. 使用了构建工具 grunt,把代码下载下来后需要执行
`npm install`
安装需要的 grunt 插件
2. 安装完插件后，需要执行构建命令生成项目所需的资源
`grunt compress-global-css`
`grunt compress-global-js`
3. 开发所需要的文件在 assets 文件夹，在开发前，需要执行 grunt watch 任务

### 目录说明
***
* /assets   可编辑静态资源
* /dists    生成的静态资源

### 皮肤说明
1. 兼容 ie8，chrome，firefox
2. 换皮肤，只需要修改 $navBgCol, $bomBtCol 等变量属性
3. 提供4种导航颜色方案
    * #3a4933 绿色
    * #04444f 蓝色
    * #74431f 橙色
    * #222222 黑色

