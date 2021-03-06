<template>
  <div ref="resizeItem" class="lite-resize-item">
    <slot></slot>
    <div
      v-if="resizeType === 'right'"
      @mousedown.stop.prevent="rightBarMouseDown"
    >
      <slot name="rightBar">
        <div
            v-if="!disabled"
            class="resize-bar right-bar"
        ></div>
      </slot>
    </div>
    <div
      v-if="resizeType === 'bottom'"
      @mousedown.stop.prevent="bottomBarMouseDown"
    >
      <slot name="bottomBar">
        <div
            v-if="!disabled"
            class="resize-bar bottom-bar"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    resizeType: {
      type: String,
      default: "right",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * @description: 鼠标在右触发器按下时的回调
     * @param {Object} evt: 鼠标事件对象
     * @return {undefined}
     */

    rightBarMouseDown(evt) {
      if (this.resizeType !== "right" || this.disabled) return;
      let item = this.$refs.resizeItem;
      let originWidth = item.clientWidth;
      let originMouseX = evt.clientX;
      document.onmousemove = (e) => {
        e.stopPropagation();
        let curMouseX = e.clientX;
        let finalWidth = originWidth + curMouseX - originMouseX;
        requestAnimationFrame(() => {
          item.style.width = finalWidth + "px";
        });
      };
      document.onmouseup = (e) => {
        e.stopPropagation();
        document.onmousemove = null;
        document.onmouseup = null;
        this.$emit("resize-end");
      };
    },
    /**
     * @description: 鼠标在下触发器按下时的回调
     * @param {Object} evt：鼠标事件对象
     * @return {undefined}
     */

    bottomBarMouseDown(evt) {
      if (this.resizeType !== "bottom" || this.disabled) return;
      let item = this.$refs.resizeItem;
      let originHeight = item.clientHeight;
      let originMouseY = evt.clientY;
      document.onmousemove = (e) => {
        e.stopPropagation();
        let curMouseY = e.clientY;
        let finalHeight = originHeight + curMouseY - originMouseY;
        requestAnimationFrame(() => {
          item.style.height = finalHeight + "px";
        });
      };
      document.onmouseup = (e) => {
        e.stopPropagation();
        document.onmousemove = null;
        document.onmouseup = null;
        this.$emit("resize-end");
      };
    },
  },
};
</script>

<style lang="less" scoped>
@bar-width: 10px;
@bar-height: 10px;

.lite-resize-item {
  position: relative;

  .resize-bar {
    position: absolute;
    z-index: 1;
  }

  .right-bar {
    height: 100%;
    width: @bar-width;
    right: -(@bar-width / 2);
    top: 0;
    cursor: col-resize;
  }

  .bottom-bar {
    height: @bar-height;
    width: 100%;
    left: 0;
    bottom: -(@bar-height / 2);
    cursor: row-resize;
  }
}
</style>
