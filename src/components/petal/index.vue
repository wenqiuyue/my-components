<template>
  <div class="petal">
    <span class="petal-flower">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "petal",
  props: {
    title: {
      type: Number,
      default: 1,
    },
  },
  computed: {},
}
</script>
<style lang="less" scoped>
// @import "../../style/variable.less";
.petal {
  &-flower {
    // float: left;
    width: 25px;
    height: 25px;
    border-radius: 50px 0 50px 50px;
    text-align: center;
    color: #f082a5;
    font-size: 17px;
    background: #fbdfe8;
    display: block;
  }
}
</style>
