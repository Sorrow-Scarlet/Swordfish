# Swordfish
![Swordfish logo](icons/icon.png)  
基于XLIFF标准的先进计算机辅助翻译工具，支持MS Office、DITA、HTML等文档格式。  

Swordfish采用翻译记忆库（TM）和机器翻译（MT）技术，支持语段过滤、术语管理、自定义功能等。

## Swordfish 视频教程

- [从源码构建Swordfish](https://youtu.be/VQveu4BLElE)
- [使用AI提示框翻译语段](https://youtu.be/8S420n2QieM)
- [通过AI菜单或快捷键翻译语段](https://youtu.be/FwsFZCjUajU)

## 授权模式

Swordfish提供两种使用方式：
- 源码版
- 年度订阅版（含安装程序和技术支持）

### 源码版

Swordfish源码完全免费。任何人可免费下载源码进行编译、修改和使用，需遵守附带的开源协议。
可通过订阅[Maxprograms技术支持群组](https://groups.io/g/maxprograms/)获取源码版的技术协助。

### 订阅版

官方安装版（来自[Maxprograms下载页](https://www.maxprograms.com/downloads/index.html)）可免费试用30天，需申请免费评估密钥。  

个人订阅密钥可通过[Maxprograms在线商店](https://www.maxprograms.com/store/buy.html)购买。订阅密钥不可共享或转移至其他设备。  

订阅版包含无限次邮件技术支持（支持邮箱：[tech@maxprograms.com](mailto:tech@maxprograms.com)）  

### 功能对比表

功能特性 | 源码版 | 订阅版
------------|:-----------:|:-----------------:
即用型安装程序 | 否 | 是
苹果签名启动器 | 否 | 是
Windows签名安装包 | 否 | 是
功能限制 | 无 | 无
技术支持 | [Groups.io](https://groups.io/g/maxprograms/)支持 | <br> - [邮件](mailto:tech@maxprograms.com)支持<br> - [Groups.io](https://groups.io/g/maxprograms/)支持



## 相关项目
- [RemoteTM](https://github.com/rmraya/RemoteTM)
- [OpenXLIFF Filters](https://github.com/rmraya/OpenXLIFF)
## 系统要求
- 编译构建需JDK 21+：[Adoptium下载](https://adoptium.net/)
- Apache Ant 1.10.14+：[Ant官网](https://ant.apache.org/)
- Node.js 22.13.0 LTS+：[Node.js下载](https://nodejs.org/)
- TypeScript 5.8.3+：[TypeScript官网](https://www.typescriptlang.org/)
## 构建指南
1. 克隆仓库
2. 配置JAVA_HOME指向JDK 21
3. 执行`ant`编译Java代码
4. 运行`npm install`安装Node依赖
5. 执行`npm start`启动程序
### 构建步骤示例
```bash
git clone https://github.com/Sorrow-Scarlet/Swordfish
cd Swordfish
ant
npm install
npm start
```
>注：
>1. 首次编译后可直接通过`npm start`启动程序。  
>2. 若无法正确编译，请先正确安装ant的相关依赖,然后尝试npm prune。