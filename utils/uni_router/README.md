# 欢迎使用 uni_router.js

对 uni-app 中的路由 api 进行了简单封装，定义了全局导航守卫方法、路由状态保存、错误捕获，pop 传参，变化监听等。使用起来及其方便，无需配置路由表， 也无需进行二次封装。代码也不复杂，只有不到100来行，比较适合中小型项目快速开发。很实用。如有BUG，还请不吝指出，非常感谢。

----

## 基本使用

```javascript
// 在 main.js 中注册
import Vue from 'vue'
import App from '@/App'
import $router, { $route } from '@/common/js/uni_router.js'

$router.beforeEach = (to, next) => { // 注册全局前置守卫
    console.log('全局前置守卫', to)
    if (to.path.includes('/test')) {
        // 可以通过传一个回调给 next 来访问 $router 实例, 会返回一个 reject('在全局前置守卫 next 中重定向路由')
        next(vm => {
            vm.push('/redirect')
        })
    } else if (to.path.includes('/redirect')) {
        next(false) //  中断当前的导航,会返回一个 reject('在全局前置守卫 next 中取消路由')
    } else {
        next() // 一定要调用该方法来 resolve 这个钩子
    }
}

$router.afterEach = to => { // 注册一个全局后置守卫
 console.log('全局后置守卫', to)
}

$router.onchange = (n, o) => { // 注册一个全局路由监听方法（可以监听小程序的物理返回），实现原理见最下方
 console.log(n) // 路由变化后的 $route 对象
 console.log(o) // 路由变化前的 $route 对象
}

Vue.prototype.$iRoute = $route // 当前路由对象，保存路由当前信息
Vue.prototype.$iRouter = $router // 路由对象，保存了实例方法

///////////////////////////////////////////////////////////////////////////////////////
// 注意：将方法挂载到 Vue 原型上不要使用 $router 作为名字。在 H5 端会和 vue-router 冲突 //
///////////////////////////////////////////////////////////////////////////////////////

// 在组件中使用
methods: {
    to() {
        this.$router.push('/test', {
            id: 2333,
            test: {
                a: 1,
                b: 2
            }
        }).then(e => {
            console.log('路由结束，当前路由对象为', e)
        }).catch(e => {
            console.warn(e)
        })
    }
}

// test 页面中
onLoad() {
    console.log(this.$route) // 可以通过 $route 获取当前路由对象、参数、路径信息
    // {
    //     fullPath: "/pages/test/test"
    //     path: "/test"
    //     query: {
    //         id: 2333,
    //         test: {
    //             a: 1,
    //             b: 2
    //         }
    //     }
    // }
}

// this.$router 上一共有 6 个方法， 分别是
this.$router.pop()
this.$router.push()
this.$router.pushPop()
this.$router.replace()
this.$router.reLaunch()
this.$router.switchTab()

// 除了 pop 方法只接受一个参数 delta 或 data 对象外，其余 5 个方法接受的参数分别是
fun(
    path, // path 路由名
    query = {}, // query 路由传参
    notBeforeEach, // isBeforeEach 是否要被全局前置守卫拦截,默认false，拦截，设置为 true 禁止拦截
    notAfterEach // isAfterEach 是否要被全局后置守卫拦截，默认false，拦截，设置为 true 禁止拦截
).then(...)

// 这 5 个方法除 pushPop 外，then 方法都会接收到当前页面的路由对象，包含参数、路径信息

// pop 方法接受一个数字 或 对象。为数字时表示返回的页面层数，为对象时，表示返回上层并将此对象作为上层 pushPop 方法 then 的参数实现 pop 传参

```

## pop 传参

当使用 pushPop 方法时，会得到一个 promise 对象，then 方法接受的是返回该页面时 pop 方法传递的参数

pop

```javascript
// 在组件中使用
methods: {
    to() {
        this.$router.pushPop('/test').then(e => {
            if (e) {
                console.log('路由返回，接收到的数据为', e) // { data: 'data' }
            }
        })
    }
}

// test 页面中
methods: {
    back() {
        this.$router.pop({ data: 'data' }) // pop 传参时必须为对象
    }
}
```

PS：pushPop 方法在 pop(data) 之前只能使用一次。即：在当前页面全局第一次调用 pushPop 方法跳转到第二个页面后，不能在第二个页面再次调用 pushPop 方法，且只能在第二个页面调用 pop(data 方法。否则会出现一些意料之外的BUG。即：pushPop 方法和 pop(data) 只能出现在相邻页面，且调用顺序互为对称。

如果你使用了 pushPop 方法，但是没有使用 pop(data) 却导致了页面回退。此使 pushPop 的 then 方法将永远不会被执行。直到下次 pushPop 才会 resolve，且参数为 null。

因为 pushPop 返回的 promise 对象的 resolve 会被保存为全局唯一。直到执行 pop 并传对象时，resolve 才会被释放。为了防止滥用，出现过多的 pending 状态的 promise 导致内存泄漏。这里将 resolve 设置为全局唯一。

如果你有复杂的需求，并且能够完美处理多个 promise 以及返回。请自行拓展。

## 注意事项

1 . 当使用分包时，跳转路由必须使用 /分包名/路由名。不使用分包时跳转路由必须为 /路由名

2 .  全局导航守卫并不能也没有对 pop 方法或者说所有的返回行为做拦截。因为目前个人用 uni-app 开发几乎都是小程序方面，小程序没办法对返回行为做拦截，所有就没做

3 . 可能不支持 nvue 。没测试过。具体原因看第二条。

4 . 虽然小程序没有相关事件去监听页面返回操作，通过 uni_router 可以巧妙地做到返回监听，简单的原理如下：

```javascript
Vue.mixin({
	onShow() {
		const pages = getCurrentPages().map(e => `/${e.route}`).reverse() // 获取页面栈
		if (pages[0]) { // 当页面栈不为空时执行
			...
			if (back) { // 当当前路由与 route 对象不符时，表示路由发生返回
				onchange(route, old)
			}
		}
	}
})
```
简单来说就是在全局混入一个 onShow 方法。已实现返回监听。但是一定要记住，只是实现了监听，并不能拦截。
因此全局的 onchang 方法在页面返回时，会在返回的页面的 onShow 时执行
在页面非返回是，会在uni[路由方法]的 success 方法调用时候执行。

----
