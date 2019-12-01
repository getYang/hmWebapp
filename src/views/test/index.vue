<template>
  <div>
    <h1>测试页面</h1>
    <p>{{ $store.state.count }}</p>
    <p>{{ count }}</p>
    <button @click="$store.commit('increment')">点击+1</button>
    <button @click="increment">点击+1</button>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  components: {},
  props: {},
  data () {
    return {
      count: Number(window.localStorage.getItem('count'))
      // count: 0
    }
  },
  computed: {},
  watch: {
  },
  created () {},
  methods: {
    increment () {
      this.count++

      // 每次数字的改变，都把它往本地存储重新放一下
      window.localStorage.setItem('count', this.count)
    }
  }
}
</script>

<style scoped></style>
