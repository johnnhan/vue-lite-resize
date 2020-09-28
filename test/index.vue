<template>
  <div id="app">
    <LiteResize>
      <div class="resize-content">
      </div>
    </LiteResize>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
#app {
  position: relative;
}
.resize-content {
  width: 100%;
  height: 100%;
  background: #ff9999;
}
</style>
