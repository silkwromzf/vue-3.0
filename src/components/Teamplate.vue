<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">{{num}}</button>
    <ion-t>1</ion-t>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';

export default {
  name: 'Teamplate',
  props: {
    msg: String,
  },
  setup() {
    const num: Ref<number> = ref(0);
    const add = () => {
      num.value ++;
    }
    return {
      num,
      add
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
