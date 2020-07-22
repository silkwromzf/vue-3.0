import { createApp, h } from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App as any);

app.component('ion-t', {
    data: function () {
        return {
            a: 111,
        }
    },
    render() {
        return h('div', ['ion-t'])
    }
});

// config 设置vue应用全局配置的对象
/**
 * 是否开启vue-devtools 
 */
// app.config.devtools = true 
/**
 * 
 * @param {Error} err  e.g. TypeError: Cannot create property 'value' on number '1'
 * @param {} vm  当前执行上下文 e.g. Proxy{…}
 * @param {string} info  e.g. "native event handler"
 */
// app.config.errorHandler = (err, vm, info) => {
//     console.log(err, vm, info)
// }
/**
 * 
 * @param msg   e.g. unhandled error during execution of native event handler 
 * @param vm   当前执行上下文 e.g. Proxy{…}
 * @param trace  组件层次跟踪 e.g.   at <Teamplate>
                        at <Home>
                        at <RouterView>
                        at <App>
 */
// app.config.warnHandler = (msg, vm, trace) => {
//     console.log(msg, vm, trace)
// }

// globalProperties 设置全局属性  如果命名冲突 组件属性优先
app.config.globalProperties.foo = 'bar'

// app.component('child-component', {
//   mounted() {
//     console.log(this.foo) // 'bar'
//   }
// })

// [未理解]
// 指定一种方法来识别在Vue之外定义的自定义元素（例如，使用Web组件API）
// 如果component符合此条件，则不需要本地或全局注册，并且Vue不会对发出警告Unknown custom element
// 任何以ion- 开头的元素将被定义为自定义组件  
app.config.isCustomElement = tag => tag.startsWith('ion-')

/**
 *  optionMergeStrategies 自定义合并策略  
 * @param parent  父组件hello 属性的值
 * @param child 子组件hello 属性的值
 * @param vm 当前执行上下文
 */
app.config.optionMergeStrategies.hello = (parent, child, vm) => {
    return `Hello, ${child}`
  }


  
app.use(router).use(store).mount('#app')
