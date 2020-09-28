<template>
  <div class="resize-item" ref="resizeItem">
    <slot></slot>
    <div class="resize-bar right-bar" @mousedown.stop.prevent="rightMouseDown"></div>
    <div class="resize-bar bottom-bar"></div>
    <div class="resize-bar right-bottom-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      minWidth: 10,
      maxWidth: 0
    }
  },
  mounted () {
    let item = this.$refs.resizeItem
    item.style.width = this.width + 'px'
    item.style.height = this.height + 'px'
    this.maxWidth = this.$parent.$el.clientWidth
  },
  methods: {
    rightMouseDown (evt) {
      let item = this.$refs.resizeItem
      let originWidth = item.clientWidth
      let originMouseX = evt.clientX
      document.onmousemove = (e) => {
        let curMouseX = e.clientX
        let finalWidth = originWidth + curMouseX - originMouseX
        finalWidth < this.minWidth && (finalWidth = this.minWidth)
        finalWidth > this.maxWidth && (finalWidth = this.maxWidth)
        item.style.width = finalWidth + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style lang="less" scoped>
@bar-width: 5px;
@bar-height: 5px;

.resize-item {
  position: absolute;

  .resize-bar {
    position: absolute;
  }
  
  .right-bar {
    height: 100%;
    width: @bar-width;
    right: 0;
    top: 0;
    cursor: ew-resize;
  }

  .bottom-bar {
    height: @bar-height;
    width: 100%;
    left: 0;
    bottom: 0;
    cursor: ns-resize;
  }

  .right-bottom-bar {
    height: @bar-height;
    width: @bar-width;
    right: 0;
    bottom: 0;
    cursor: nwse-resize;
  }
}
</style>
