import { createApp, h } from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App as any);


// -------------------------------Application Config   ------------------------------------------------

//config 设置vue应用全局配置的对象
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
// 挂在全局方法和属性
// app.config.globalProperties.foo = 'bar'

// app.component('child-component', {
//   mounted() {
//     console.log(this.foo) // 'bar'
//   }
// })

// [未理解]
// 指定一种方法来识别在Vue之外定义的自定义元素（例如，使用Web组件API）
// 如果component符合此条件，则不需要本地或全局注册，并且Vue不会对发出警告Unknown custom element
// 任何以ion- 开头的元素将被定义为自定义组件  
// app.config.isCustomElement = tag => tag.startsWith('ion-')

// app.component('ion-t', {
//     data: function () {
//         return {
//             a: 111,
//         }
//     },
//     render() {
//         return h('div', ['ion-t'])
//     }
// });


/**
 *  optionMergeStrategies 自定义合并策略  
 * @param parent  父组件hello 属性的值
 * @param child 子组件hello 属性的值
 * @param vm 当前执行上下文
 */
app.config.optionMergeStrategies.hello = (parent, child, vm) => {
    return `Hello, ${child}`
  }


// performance 性能
// 将其设置为true可以在浏览器的devtool性能/时间轴面板中启用组件init、编译、渲染和修补性能跟踪。
// 只在开发模式和支持performance.mark的浏览器中工作

// ------------------------------------------------end------------------------------------------



// -------------------------------------Application API---------------------------------

// 改变vue 全局配置的api 移到由createApp创建的实例中，是的配置的影响只限于当前的实例
// 调用createApp返回一个应用程序实例。该实例提供了一个应用程序上下

// component 注册全局组件
// config 全局配置
// directive 注册全局指令
// mixin 全局的mixin函数
// mount 挂在vue实例的方法
// provide 依赖注入provide/inject
  // https://v3.vuejs.org/guide/composition-api-provide-inject.html#injection-reactivity
  // 可以对依赖项进行 ref 或者 reactive 装箱 
  // 最好在依赖中提供改变依赖属性的方法  而不是在注入的上下文中去改变依赖项 类似于action
// unmount 销毁挂载的实例
// use 使用第三方插件
  // 安装Vue.js插件。
  // 如果插件是对象，则它必须公开一个install方法。
  // 如果它本身是一个函数，它将被视为安装方法。将以Vue作为参数调用install方法。
    // 当在同一个插件上多次调用此方法时，该插件将仅安装一次。

// ---------------------------------end------------------------------
  
app.use(router).use(store).mount('#app')

// -----------------------------------------Global API ---------------------------------------
// VUE 提供的方法或属性

// createApp 创建一个vue实例，返回提供应用程序上下文的应用程序实例
// 接受2个参数 
    // interface Data {
    //     [key: string]: unknown
    //   }
    
    // export type CreateAppFunction<HostElement> = (
    //     rootComponent: PublicAPIComponent, 
    //     rootProps?: Data | null
    // ) => App<HostElement>

// h  render 函数

// defineComponent 
  // defineComponent 不做任何操作 返回输入的对象
  // 但是在类型声明中  会返回一个人工渲染函数的合成类型的构造函数 
  // ？？？？？

//  defineAsyncComponent
  // 定义一个异步组件

// resolveComponent
  // 通过一个组件名 返回这个组件  只能在render和setup函数中使用

// resolveDynamicComponent
  // 同上  

// resolveDirective 获取指令
// withDirectives 配合上面获取的指令
// https://v3.vuejs.org/api/global-api.html#withdirectives
// e.g.
// import { withDirectives, resolveDirective } from 'vue'
// const foo = resolveDirective('foo')
// const bar = resolveDirective('bar')

// return withDirectives(h('div'), [
//   [foo, this.x],
//   [bar, this.y]
// ])

//createRenderer
// 【不会】


// nextTick
//推迟在下一个DOM更新周期后执行的回调。更改一些数据以等待DOM更新后，请立即使用它。
