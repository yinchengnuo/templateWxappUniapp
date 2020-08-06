# 欢迎使用 uni_storage.js

对 uni-app 中的本地存储 api 进行了简单封装，使用 Proxy 对对本地存储的操作进行代理。目前只支持同步操作，非常适合少量数据的持久化存储。代码也不复杂，只有不到 50 行，比较适合中小型项目快速开发。很实用。如有BUG，还请不吝指出，非常感谢。

----

## 使用

```javascript
// 在 main.js 中注册
import Vue from 'vue'
import App from '@/App'
import $storage from '@/common/js/uni_storage.js'

Vue.prototype.$storage = $storage

// 在组件中使用

this.$storage.obj = { // 本地 uni_storage： {"obj":{"a":1,"b":2,"c":[1,2,3]}}
    a: 1,
    b: 2,
    c: [1, 2, 3]
}

// 添加数据

this.$storage.add = 123 // 本地 uni_storage： {"obj":{"a":1,"b":2,"c":[1,2,3]},"add":123}

// 获取数据

this.$storage.all() // {add: 123, obj: {…}}

// 更改数据

this.$storage.add = 666 // 本地 uni_storage： {"obj":{"a":1,"b":2,"c":[1,2,3]},"add":666}
this.$storage.obj.c[0] = 666 // 本地 uni_storage： {"obj":{"a":1,"b":2,"c":[666,2,3]},"add":666}

// 删除数据

delete this.$storage.obj // 本地 uni_storage： {"add":666}

// 检测数据是否存在

this.$storage.has('add') // true

// 清空数据

this.$storage.clear() // 本地 uni_storage： {}

```
# 注意事项

1 . uni_storage 的核心实现是利用了 Proxy 对 sorage 的操作实时映射到本地存储，因此整个过程是同步的

2 .  不建议大量数据量操作

----
