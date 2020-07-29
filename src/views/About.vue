<template>
  <div class="about">
    <button @click="changeProps">改变props</button>
    <reactive-api :msg="msg" ref="reactiveApi"/>
  </div>
</template>

<script lang="ts">
// 当第一次ts 中引入大写的文件名文件时候会报错
// 关闭vscode 重新打开即可 其他情况可参考 https://github.com/microsoft/TypeScript/issues/25460
import ReactiveApi from '../components/ReactiveApi.vue'
import { ref, Ref, onMounted } from 'vue'

export default {
  components: {ReactiveApi},
  setup(props, context) {
    const msg: Ref<string> = ref('123123')
    const changeProps = function() {
      msg.value = 'asdadasd';
    }
    // onMounted(function () {
    //   console.log(this.$ref.reactiveApi.msg)
    // })
    return {
      msg,
      changeProps
    }
  }
}
</script>