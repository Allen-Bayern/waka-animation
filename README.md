# 动画效果

使用anime.js来做。

## 展示方法：

> 注：建议使用`yarn`进行包管理。

1. 安装parcel。使用`yarn`：`yarn global add parcel-bundler`；使用`npm`：`npm i -g parcel-bundler`；
2. 然后`parcel build ./index.html`即可展示。

## 参考：
1. https://codepen.io/Paolo-Duzioni/pen/jvrxpL
2. https://codepen.io/juliangarnier/pen/aWERWX
3. https://codepen.io/allen-bayern/pen/abwodyo
4. https://codepen.io/ainalem/pen/mLqvee

## 分支信息：

1. `master`分支：必须为当前可以稳定运行的版本；
2. `dev`分支：**开发中**，用来折腾新功能；
3. `res0`分支：使用es5的稳定运行版本；
4. `res1`分支：使用es6特性的新版本，浏览器容易崩；
5. `res1_rew`分支：**开发中**，对`res1`分支重写，通过`babel`或`TypeScript`等手段以求es6代码可以运行。写成之后与`res1`分支合并并删除。