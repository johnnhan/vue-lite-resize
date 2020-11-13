<template>
  <div id="app">
    <div style="width: 400px; height: 100%; display: flex; flex-direction: column;">
      <LiteResize
        style="width: 100%;"
        dragType="bottom"
      >
        <div class="resize-content">
        </div>
      </LiteResize>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
#app {
  .lite-resize-item {
    height: 50%;
    min-height: 30%;
    max-height: 80%;
    flex-shrink: 0;
  }

  .content {
    width: 100%;
    flex-grow: 1;
    background: #99ff99;
  }

  .resize-content {
    width: 100%;
    height: 100%;
    background: #ff9999;
  }
}
</style>
