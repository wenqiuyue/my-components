<template>
  <div class="title-bg">
    <div class="triangle" :style="`width:${width}`">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "title-bg",
  props: {
    title: { type: String, default: "这是一个标题" },
    width: { type: String, default: "7rem" },
  },
}
</script>
<style lang="less">
.title-bg {
  padding: 1rem;
  text-align: center;
  .triangle {
    @bg-color: #a8c5f6;
    @height: 2rem;
    display: inline-block;
    position: relative;
    background-color: @bg-color;
    height: @height;
    line-height: @height;
    margin: 0 1rem;
    text-align: center;
    color: white;
    font-size: 0.85rem;
    &::before {
      width: 0;
      height: 0;
      border-width: calc(@height / 2);
      border-style: solid;
      border-color: transparent @bg-color transparent transparent;
      position: absolute;
      left: -@height;
      content: " ";
    }
    &::after {
      width: 0;
      height: 0;
      border-width: calc(@height / 2);
      border-style: solid;
      border-color: transparent transparent transparent @bg-color;
      position: absolute;
      right: -@height;
      content: " ";
      top: 0;
    }
  }
}
</style>
