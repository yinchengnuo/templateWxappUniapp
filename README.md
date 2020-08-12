# 欢迎使用滚动君

此项目是在2020年疫情在家期间闲来无事花了两天时间做着玩的。那个时候做前端工作刚好半年，期间做了几个项目，略有心得。于是便写了个项目简单汇总下。转眼又是半年过去，除了业务更加熟练，我对使用 uni 开发小程序又多了几分心得。而且我在微信公众平台的后台也看到，这个小程序一直都有人在使用。想到这半年多一直扔着没管这个项目，心中惭愧。隧重构，带着最近半年的想法。

## 新增全局注入自定义组件

在全局方法（见下方），Global API 中。我们可以简单的通过 this.$loading()。来实现 loading 效果。
但是实际上，有时候这个 loading 效果并不是我们想要的。比如 UI 设计的 loading 是一张 Gif 动图。产品希望 loading 开始结束时有淡入淡出效果。而且整个 App 所有的 loading 是统一的。当然更有时候除了loading，甚至toast 、model 等交互效果都是如此。
我们通常的做法是，在 components 文件夹中定义一个组件，比如这里叫：custom-interactive，同时在里面定义了 _$loading 方法。

引入后就是在 template 中写组件：
```javascript
<custom-interactive ref="custom-interactive" />
```

使用时：

```javascript
this.$refs['custom-interactive']._$loading();
```
这种做法本身没有什么问题，但是过于繁琐。不仅需要在每个页面的模板中都要声明组件，而且还需要用：
```javascript
this.$refs['custom-interactive']...
```
这里实现了一个无需引入组件即可调用组件内部方法的例子，仅供参考。

#### 原理是在 vue.config.js 中，通过配置 vue-loader，重写 vue-template-compiler 的 compile 方法。手动在 compile 之前将 custom-interactive 组件插入 template。

如下：

```javascript
module.exports = {
	// ...
	chainWebpack: config => {
		config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => {
			const compile = options.compiler.compile
			options.compiler.compile = (template, info) => {
				if (info.resourcePath.match(/^pages/)) {
					template = template.trim()
					template = template.replace(/^<[\d\D]+?>/g, _ => `${_}
						<custom-interactive ref="custom-interactive" style="position: fixed; z-index: 123;" />
					`)
				}
				return compile(template, info)
			}
			return options
		})
	}
}
```

此时只需封装：
```javascript
this._$loading() // 代替 this.$refs['custom-interactive']._$loading() 即可
```


## 新增方法

之前在开发 uni-app 项目时，个人习惯在全局变量 uni 上挂载一些工具方法。但是随着项目的深入，这些方法一定会越来越多。这是候就又出现了那个老生常谈的问题：命名冲突。uni 作为全局变量，是由官方维护的。如果处理不好命名问题，很容易覆盖一些官方的 API。这就得不偿失了。

于是我在 vue.config.js 中定义了一个全局变量 G 对象。将所有的工具方法全部放在 G 对象里面。G 对象的源码在 G 文件夹里。同时为了使用起来更方便，我把 Vue.prototype 对象的原型指向了 G对象。如此，G 中的方法便可以通过 this 调用。G 对象中有如下方法：

### $loading(title = '加载中', mask = true)

描述：显示 loading

```javascript
this.$loading()
G.$loading()
```
---
### $loaded()

描述：隐藏 loading

```javascript
this.$loaded()
G.$loaded()
```
---
### $toast(title, icon = 'none', duration = 1500, mask = false)

描述：显示 toast

```javascript
this.$toast('toast文字')
this.$toast('toast文字', 'success')
G.$toast('toast文字', '../../toast.png', 2333)
```
---
### $toasted()

描述：隐藏 toast

```javascript
this.$toasted()
G.$toasted()
```
---

### $model(title, content, { ... })

描述：显示 model

```javascript
this.$model('只有内容')
this.$model('自定义标题', '带标题的内容')
this.$model('自定义标题', '带标题带自定义的内容', {
    cancelText: '自定义文字',
    confirmText: '自定义文字',
    confirmColor: '#00FF00',
    ...
}).then(() => console.log('点击确定'))
  .catch(() => console.log('点击取消'))
```
---
### $copy(string, toast, toastIcon)

描述：复制到剪切板

```javascript
this.$copy('18888888888')
this.$copy('18888888888', '复制成功')
this.$copy('18888888888', '复制成功', '../../toast.png')
```
---

### $call(phoneNumber)

描述：拨打电话

```javascript
this.$call('18888888888')
```
---
### $preview(string/[string])

描述：预览图片

```javascript
this.$preview('http://....png')
this.$preview('../../test.png')
this.$preview(['http://....png', '../../test.png'])
```
---
### $offset(selector)

描述：获取元素位置尺寸（mounted 之后执行且 G.$offset 调用无效）

```javascript
this.$offset('.content').then(res => { // mounted 之后执行且 G.$offset 调用无效
    console.log(res) // { top: .., left: .., width: .., height: ..... }
})
```
---
### $clone(json/object)

描述：快速克隆方法（使用 JSON 方法实现）

```javascript
console.log(this.$clone({ a: 1 }))
```
---
### $request(api, callback, conf)

描述：快速网络请求方法（具体实现及作用看源码）

---

除了如上那些方法。对于项目中主要使用的三个 uni 工具库：

## [uni_request](https://ext.dcloud.net.cn/plugin?id=946)、[uni_router](https://ext.dcloud.net.cn/plugin?id=1089)、[uni_storage](https://ext.dcloud.net.cn/plugin?id=1126)

均已升级到最新版本。这些工具都由我个人维护，并且已经在多个线上项目中稳定运行，相对安全可靠。结合这些工具库，已经几乎可以实现中大型 web 项目中需要的所有功能，并且更加小巧便捷。

最后，感谢 uniapp。感谢 Dcloud。感谢插件市场所有向我提出宝贵意见的小伙伴。当然最后，如果你觉得这个项目对你有所帮助，还请 star 支持。

# [https://github.com/yinchengnuo/templateWxappUniapp](https://github.com/yinchengnuo/templateWxappUniapp)


![1](https://raw.githubusercontent.com/yinchengnuo/templateWxappUniapp/master/md/1.jpg)
![2](https://raw.githubusercontent.com/yinchengnuo/templateWxappUniapp/master/md/2.jpg)
![3](https://raw.githubusercontent.com/yinchengnuo/templateWxappUniapp/master/md/3.jpg)
![4](https://raw.githubusercontent.com/yinchengnuo/templateWxappUniapp/master/md/4.jpg)
![5](https://raw.githubusercontent.com/yinchengnuo/templateWxappUniapp/master/md/5.jpg)
