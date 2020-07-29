<template>
  <div class="hello">
    ReactiveApi
    {{msg}}/
    {{userInfo}}
    <hr />
    {{slogan.word}}
    <hr />
    <div ref="myDom"></div>
    <button @click="change">改变</button>
    
  </div>
</template>

<script lang="ts">
import { reactive, toRaw, readonly, markRaw, ref, onMounted } from "vue";

export default {
  name: "ReactiveApi",
  props: {
    msg: String,
  },
  setup() {
    // reactive
    // proxy代理一个对象 使得vue能够对其进行响应
    const userInfo = reactive({
      name: "zf",
      age: 18,
      sex: "male",
    });
    const slogan = readonly({
      word: "qweqwe",
    });
    const toRawUserInfo = toRaw(userInfo);
    const toRawSlogan = toRaw(slogan);
    const change = function () {
      userInfo.age--;
      toRawUserInfo.name = ">>>";
      // toRawSlogan.word = 'qweqw' 无法修改 只读 报错
    };
    // readonly  只读代理
    // isProxy  是否代理
    // isReactive 是否未响应代理  readonly一般为false  但是当readonly代理一个响应对象时候为 true   e.g. readonly(reactive(xxx))
    // isReadonly
    // toRaw 返回代理的原始对象的指针 指向原始对象  对齐进行修改会影响响应对象

    //markRaw 标记对象 使得其不会被转化未代理 返回对象本身
    const obj = { x: 1 };
    const markRawObj = markRaw(obj);
    console.log(obj === markRawObj); // true
    // shallowReactive shallowReadonly 只代理一层 不进行深层遍历

    const myDom = ref(null);
    onMounted(function () {
      console.log(myDom.value);
    });
    return {
      userInfo,
      change,
      slogan,
      myDom,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
