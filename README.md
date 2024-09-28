# Le Git Graph - GitHub 提交图

<img src="https://drive.google.com/uc?export=download&id=12bnQqy4cm2vQcZSKWo2INBv-69iqkF_p" width="150">

一个浏览器扩展，可以显示任何 GitHub 存储库的 git 图。

[![版本](https://img.shields.io/badge/License-MIT-yellow)]()
[![版本](https://img.shields.io/badge/Version-1.2.8-yellowgreen)]()
[![版本](https://img.shields.io/badge/Chrome_CI/CD-Success-green)]()
[![版本](https://img.shields.io/badge/Firefox_CI/CD-Success-green)]()

## 演示
![演示图片](https://user-images.githubusercontent.com/46727865/218700103-c26082db-a696-435c-934c-cc66e1c067bd.png)

## 安装

通过以下链接安装扩展 -

对于 Google Chrome、Opera、Vivaldi、Brave 和 Microsoft Edge：

[https://chrome.google.com/webstore/detail/le-git-graph-commits-grap/joggkdfebigddmaagckekihhfncdobff](https://chrome.google.com/webstore/detail/le-git-graph-commits-grap/joggkdfebigddmaagckekihhfncdobff)

对于 Mozilla Firefox：

[https://addons.mozilla.org/firefox/addon/le-git-graph-github-git-graph/](https://addons.mozilla.org/firefox/addon/le-git-graph-github-git-graph/)

安装后，打开任何 GitHub 存储库，将会看到一个新的“提交”选项卡。

打开提交选项卡，并按照提示使用你的 GitHub 帐户进行身份验证。

## 组织拥有的私有仓库的设置

默认情况下，访问组织拥有的私有仓库是受限的。要访问此类仓库的提交图，需要按照以下步骤操作。

1. 访问 [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. 创建一个个人访问令牌（PAT），选择以下权限 -
    - repo | 私有仓库的完全控制
3. 返回到组织拥有的仓库的提交选项卡。
4. 在“与 GitHub 授权”下拉菜单中，选择“自定义个人访问令牌”。
5. 输入 PAT 并点击“添加 PAT”。

（获取提交图需要完全访问仓库，因为当前 GitHub OAuth 权限没有只读访问级别。）

## 技术栈

**客户端：** JavaScript，Manifest V3

**服务器：** GitHub GraphQL，GitHub OAuth，FireBase 云函数

## 特性

- GitHub OAuth 身份验证 ✓
- 连接到 GitHub GraphQL ✓
- 从 API 获取提交数据 ✓
- 根据需要获取更多提交 ✓
- 指定访问级别的选项（仅公共或私有） ✓
- 鼠标悬停在提交点上查看详情 ✓
- 添加自定义 PAT 的选项 ✓
- 根据分支过滤提交 - 待实现

## 联系

欢迎通过 scaria@scaria.dev 或 nirmalscaria1@gmail.com 联系我们。