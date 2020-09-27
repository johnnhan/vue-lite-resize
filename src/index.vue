<template>
  <div class="resize-item">
    <slot></slot>
    <div class="resize-bar right-bar"></div>
    <div class="resize-bar right-bottom-bar"></div>
    <div class="resize-bar bottom-bar"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
.resize-item {
  position: absolute;

  .resize-bar {
    position: absolute;
    background: #999;
  }
  
  .right-bar {
    height: 100%;
    width: 1px;
    right: 0;
    top: 0;
  }
}
</style>
