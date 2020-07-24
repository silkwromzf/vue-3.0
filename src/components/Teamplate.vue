<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">{{num}}</button>
    <ion-t>1</ion-t>
    <div>name{{name}}{{age}}</div>
    <button @click="changeAge">变变变</button>
  </div>
</template>

<script lang="ts">
import { ref, Ref, inject } from 'vue';

export default {
  name: 'Teamplate',
  inject: {
    name: {
      from: 'name',
    },
  },
  props: {
    msg: String,
  },
  setup(props, context) {
    const num: Ref<number> = ref(0);
    const add = () => {
      num.value ++;
    }
    const age = inject('age')
    const changeAge = inject('changeAge')
    return {
      num,
      add,
      age,
      changeAge
    }
  }
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
