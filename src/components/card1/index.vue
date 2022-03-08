<template>
  <div class="left_main_top">
    <div class="write_one"></div>
    <div class="write_two"></div>
    <div class="write_three">
      <div class="t_title">Share your thoughts...</div>
      <div class="t_title">Share your thoughts...</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.left_main_top {
  height: 140px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  background-image: linear-gradient(to top, #fdf6ec, #f5dab1);
  background-repeat: no-repeat;
  margin-bottom: 3px;
  .write_one {
    left: 0;
    width: 260px;
    height: 100%;
    position: absolute;
    clip-path: circle(76% at 35% 72%);
    background-color: #fff;
    -webkit-clip-path: circle(76% at 35% 72%);
  }
  .write_two {
    width: 138px;
    height: 125px;
    z-index: 1;
    margin-left: 44px;
    margin-right: 112px;
    background: url("~@/assets/images/write.png") no-repeat;
    background-size: contain;
  }
  .write_three {
    .t_title {
      color: #333333;
      font-size: 24px;
      margin-bottom: 21px;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
