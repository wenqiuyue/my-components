<template>
  <div class="star">
    <div class="item_single">
      <span class="star_span">
        <svg-icon :value="icon" :size="4" />
        <label class="number" :style="`color: ${numberColor}`">{{
          number
        }}</label>
      </span>
      <span class="item_title">{{ itemTitle }}</span>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@/components/svg-icon"
export default {
  components: {
    SvgIcon,
  },
  name: "star",
  props: {
    itemTitle: { type: String, default: "标题" },
    number: { type: Number, default: 21 },
    numberColor: { type: String, default: "#34AE94" },
    icon: { type: String, default: "icon-xingxingman" },
  },
  computed: {},
}
</script>
<style lang="less" scoped>
.star {
  .item_single {
    display: flex;
    flex-direction: column;
    margin-right: 22px;
    align-items: center;
    .star_span {
      position: relative;
      .number {
        position: absolute;
        font-size: 22px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .item_title {
      font-size: 14px;
      color: #666666;
      margin-top: 5px;
    }
  }
}
</style>
