<template>
  <div class="title_com">
    <div class="title_style">
      <div class="quadrilateral">{{ title }}</div>
      <div class="qblique"></div>
      <div class="qblique second-qblique"></div>
    </div>
    <div class="con_text">{{ contentText }}</div>
  </div>
</template>
<script>
export default {
  name: "title-style",
  props: {
    title: { type: String, default: "这是一个标题" },
    shape: { type: String, default: "triangle" },
    contentText: {
      type: String,
      default:
        "Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set append-to-body of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.",
    },
  },
  computed: {},
}
</script>
<style lang="less">
.title_com {
  .title_style {
    margin: 10px 0;
    width: 100%;
    border-top: 1px dashed #ee8ca1;

    .quadrilateral {
      @bg-color: #ee8ca1;
      @height: 30px;
      display: inline-block;
      position: relative;
      background-color: @bg-color;
      height: @height;
      line-height: @height;
      width: 7rem;
      text-align: center;
      color: white;
      font-size: 16px;
      z-index: 99;
      &::after {
        width: 0;
        height: 0;
        border-width: calc(@height / 2);
        border-style: solid;
        border-color: @bg-color transparent transparent @bg-color;
        position: absolute;
        right: -@height;
        content: " ";
      }
    }
    .qblique {
      @bg-color: #ee8ca1;
      @height: 30px;
      display: inline;
      position: relative;
      background-color: @bg-color;
      left: 1rem;
      opacity: 0.6;
      z-index: 98;
      &::before {
        width: 0;
        height: 0;
        border-width: calc(@height / 2);
        border-style: solid;
        border-color: transparent @bg-color @bg-color transparent;
        position: absolute;
        left: -@height;
        content: " ";
      }
      &::after {
        width: 0;
        height: 0;
        border-width: calc(@height / 2);
        border-style: solid;
        border-color: @bg-color transparent transparent @bg-color;
        position: absolute;
        right: -@height;
        content: " ";
      }
    }
    .second-qblique {
      left: 2rem;
      opacity: 0.2;
    }
  }
  .con_text {
    background: rgba(238, 140, 161, 0.2);
    line-height: 20px;
    padding: 0.6rem;
    border-radius: 5px;
  }
}
</style>
