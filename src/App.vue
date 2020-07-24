<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <hr>
      <button @click="changeAge">变年轻~{{mainData.age}}</button>
    </div>
    <router-view />
  </div>
</template>

<script lang='ts'>
import { reactive, provide, toRefs } from "vue";
interface Data {
  name: string;
  age: number;
}
type State = {
  mainData: Data;
  changeAge: () => void;
};
export default {
  provide: function () {
    return {
      name: this.mainData.name,
    };
  },
  setup(): State {
    const mainData = reactive({
      name: "zf",
      age: 18,
    });
   
    const mainDataAsRefs = toRefs(mainData)
     function changeAge() {
      mainDataAsRefs.age.value -= 1;
    }
    provide('age', mainDataAsRefs.age)
    provide('changeAge',changeAge)
    return {
      mainData,
      changeAge
    };
  },
};
</script>
<style lang="scss">
</style>
