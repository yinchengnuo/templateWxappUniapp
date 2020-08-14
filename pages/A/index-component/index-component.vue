<template>
	<view class="index-component padding-sm">
		<view class="p">在全局方法，Global API 中。我们可以简单的通过 this.$loading()。来实现 loading 效果。</view>
		<view class="p">但是实际上，有时候这个 loading 效果并不是我们想要的。比如 UI 设计的 loading 是一张 Gif 动图。产品希望 loading 开始结束时有淡入淡出效果。
			而且整个 App 所有的 loading 是统一的。当然更有时候除了 loading，甚至toast 、model 等交互效果都是如此。</view>
		<view class="p">我们通常的做法是，在 components 文件夹中定义一个组件，比如这里叫：custom-interactive，同时在里面定义了 _$loading 方法。</view>
		<view class="p">引入后就是在 template 中写组件：</view>
		<rich-text :nodes="nodesBefore"></rich-text>
		<view class="p">使用时：</view>
		<rich-text :nodes="nodesAfter"></rich-text>
		<view class="p">这种做法本身没有什么问题，但是过于繁琐。不仅需要在每个页面的模板中都要声明组件，而且还需要用：this.$refs['custom-interactive']... </view>
		<view class="p">这里实现了一个无需引入组件即可调用组件内部方法的例子，仅供参考。
			原理是在 vue.config.js 中，通过配置 vue-loader，重写 vue-template-compiler 的 compile 方法。手动在 compile 之前将 custom-interactive 组件插入 template：</view>
		<rich-text :nodes="nodesAfterAfter"></rich-text>
		<button type="primary" @click="_$loading()">试一试 this._$loading()</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nodesBefore: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">&lt;custom-interactive ref="custom-interactive" /&gt;
</pre>`,
				nodesAfter: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">this.$refs['custom-interactive']._$loading();
</pre>`,
				nodesAfterAfter: `
<pre style="border: 1px solid #AAAAAA; border-radius: 8px; background: #FFFAE8; padding: 8px; margin: 8px 0px; overflow: scroll;">// vue.config.js
module.exports = {
  // ...
  chainWebpack: config => {
    config.module.rule('vue')
	.use('vue-loader')
	.loader('vue-loader').tap(options => {
	  const compile = options.compiler.compile
		options.compiler.compile = (template, ...args) => {
		  if (args[0].resourcePath.match(/^pages/)) {
			template = template.replace(/[\\s\\S]+?&lt[\\d\\D]+?&gt/, _ => \`\${_}
			  &lt;custom-interactive ref="custom-interactive" style="position: fixed; z-index: 123;" /&gt;
			\`)
		  }
		  return compile(template, ...args)
	    }
	  return options
    })
  }
}
</pre>`,
			};
		}
	}
</script>

<style lang="scss" scoped>
	.index-component {
		
	}
</style>
