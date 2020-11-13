<template>
  <div
    ref="resizeItem"
    class="lite-resize-item"
  >
    <slot></slot>
    <slot name="rightBar">
      <div
        v-if="dragType === 'right'"
        class="resize-bar right-bar"
        @mousedown.stop.prevent="rightBarMouseDown"
      ></div>
    </slot>
    <slot name="bottomBar">
      <div
        v-if="dragType === 'bottom'"
        class="resize-bar bottom-bar"
        @mousedown.stop.prevent="bottomBarMouseDown"
      ></div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    dragType: {
      type: String,
      default: 'right'
    }
  },
  methods: {
    /**
     * @description: 鼠标在右触发器按下时的回调
     * @param {Object} evt: 鼠标事件对象
     * @return {undefined}
     */    
    rightBarMouseDown (evt) {
      if (this.dragType !== 'right') return
      let item = this.$refs.resizeItem
      let originWidth = item.clientWidth
      let originMouseX = evt.clientX
      document.onmousemove = (e) => {
        e.stopPropagation()
        let curMouseX = e.clientX
        let finalWidth = originWidth + curMouseX - originMouseX
        item.style.width = finalWidth + 'px'
      }
      document.onmouseup = (e) => {
        e.stopPropagation()
        document.onmousemove = null
        document.onmouseup = null
        this.$emit('resize-end')
      }
    },
    /**
     * @description: 鼠标在下触发器按下时的回调
     * @param {Object} evt：鼠标事件对象
     * @return {undefined}
     */    
    bottomBarMouseDown (evt) {
      if (this.dragType !== 'bottom') return
      let item = this.$refs.resizeItem
      let originHeight = item.clientHeight
      let originMouseY = evt.clientY
      document.onmousemove = (e) => {
        e.stopPropagation()
        let curMouseY = e.clientY
        let finalHeight = originHeight + curMouseY - originMouseY
        item.style.height = finalHeight + 'px'
      }
      document.onmouseup = (e) => {
        e.stopPropagation()
        document.onmousemove = null
        document.onmouseup = null
        this.$emit('resize-end')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@bar-width: 10px;
@bar-height: 10px;

.lite-resize-item {
  position: relative;

  .resize-bar {
    background-color: rgba(0, 0, 255, 0.2);
    position: absolute;
  }
  
  .right-bar {
    height: 100%;
    width: @bar-width;
    right: -(@bar-width/2);
    top: 0;
    cursor: col-resize;
  }

  .bottom-bar {
    height: @bar-height;
    width: 100%;
    left: 0;
    bottom: -(@bar-height/2);
    cursor: row-resize;
  }
}
</style>
