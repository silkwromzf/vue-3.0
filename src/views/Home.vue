<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Teamplate msg="Welcome to Your Vue.js App" :s="1">
      ??????????/
    </Teamplate>
    <button v-on:click="addToCart">Add to cart</button>
    <p>a({{ a}})</p>

    <p>Cart({{ cart }})</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Teamplate from "@/components/Teamplate.vue";

export default {
  name: "Home",
  components: {
    Teamplate,
  },
  data: function () {
    return {
      a: 0,
      cart: 0,
      b: 0,
      c: 0
    };
  },
  watch: {
    a: [
      "handle1",
      function handle2() {
        console.log("handle2");
      },
      {
        handler: function handle3() {
          console.log("handle3");
        },
        immediate: true,
      },
    ],
  },
  methods: {
    handle1() {
      console.log("handle1");
    },
    addToCart() {
      this.a += 1;
       this.b += 1;
      this.cart += 1;
    },
  },
  mounted() {
    setTimeout(() => (this.a = 1), 1000);
  },
  // 只要有渲染  所有被渲染到dom中的状态将被捕获
  renderTracked({ key, target, type }) {
    console.log({ key, target, type });
    /* This will be logged when component is rendered for the first time:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type });
  },
  unmounted() {
    console.log(this);
  },
};
</script>
