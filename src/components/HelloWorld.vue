<template>
  <div class="hello container">
    <img src="../assets/harden.jpg">
    <h1 class="mt-5">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '這是首頁，所以 Harden 不動'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
