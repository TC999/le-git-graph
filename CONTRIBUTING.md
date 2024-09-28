# 欢迎来到 Le Git Graph 贡献指南 <!-- omit in toc -->

感谢你花时间为我们的项目做贡献！你所做的任何贡献都会在 Chrome 网上应用店和 Firefox 附加组件中心显示 :sparkles:。

请阅读我们的 [行为准则](./CODE_OF_CONDUCT.md)，以保持我们的社区友好和尊重。

在本指南中，你将了解从开问题、创建 PR、审核到合并 PR 的贡献工作流程。

## 新贡献者指南

要了解项目的概况，请阅读 [README](README.md)。以下是一些帮助你开始扩展开发的资源：

- [为开发加载扩展 - Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)
- [为开发加载扩展 - Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing)
- [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
- [GitHub GraphQL API](https://docs.github.com/en/graphql)

## 开始

通过 Chrome 网上应用店或 Firefox 附加组件中心安装的扩展主要面向最终用户消费。开发时，扩展需要以不同的方式加载。首先，请按照以下步骤操作：
1. 卸载或禁用已通过 Chrome 网上应用店或 Firefox 附加组件中心安装的 Le Git Graph。
2. Fork 此仓库。
3. 克隆已 Fork 的仓库。([如何操作？](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository))
4. 从克隆的仓库加载扩展。对于 Chrome，请按照 [这些步骤](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)，对于 Firefox，请按照 [这些步骤](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing)。
5. 在源代码中进行更改，并在浏览器中刷新扩展以查看更改。

### 问题

#### 创建新问题

如果你发现 Le Git Graph 存在问题，请 [搜索是否已经存在相关问题](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments)。如果不存在相关问题，可以使用相关 [问题表单](https://github.com/NirmalScaria/le-git-graph/issues/new/choose) 打开一个新问题。

#### 解决问题

浏览我们的 [现有问题](https://github.com/NirmalScaria/le-git-graph/issues)，找出你感兴趣的问题。你可以使用 `labels` 作为过滤器缩小搜索范围。一般来说，问题通常不会分配给任何人。如果你找到想要解决的问题，欢迎提交修复的 PR。

### 进行更改

#### 开发者文档

开发者文档提供了扩展当前工作的概念。强烈建议在积极进行源代码工作之前先简要浏览文档，以帮助你的工作更顺利。

#### 修复错误

该项目目前不遵循单元测试（至少还没有）。请确保通过相关测试用例进行测试，以确保修复稳定。

### 提交更新

当你对更改满意时，请提交更改。

### 拉取请求

完成更改后，提交并推送，然后创建拉取请求（PR）。
- 如果你是在解决某个问题，请别忘了 [将 PR 链接到问题](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)。
- 启用 [允许维护者编辑](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) 的复选框，以便可以更新分支进行合并。
一旦提交 PR，你的提案将会被审核，可能会有问题或需要额外信息的请求。
- 你可能会被要求在 PR 合并之前进行更改，可以使用 [建议的更改](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) 或拉取请求评论进行修改。你可以通过 UI 直接应用建议的更改。你也可以在你的 Fork 中进行其他更改，然后提交到你的分支。
- 如果遇到任何合并问题，请查看这个 [Git 教程](https://github.com/skills/resolve-merge-conflicts) 以帮助你解决合并冲突和其他问题。

### 你的 PR 已合并！

恭喜你 :tada::tada: 非常感谢你 :sparkles:。

一旦你的 PR 被合并，你的贡献将在下一个版本发布时公开可见。