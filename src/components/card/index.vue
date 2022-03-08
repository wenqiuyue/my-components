<template>
  <!-- 课程介绍 -->
  <div class="class-introduce">
    <title-circle :title="'课程介绍'" :number="'01'"></title-circle>
    <div class="introduce">
      <span class="introduce_main">
        官方指南假设你已了解关于 HTML、CSS 和 JavaScript
        的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的
      </span>
    </div>
    <title-circle :title="'报名须知'" :number="'02'"></title-circle>
    <div class="notice">
      <span class="horn3"></span>
      <div class="question"><span>Q:</span> 请问这个课程如何报名？</div>
      <div class="answer">
        <span>A:</span>
        <div>
          <br />
          1、课程名额有限，请尽快报名；
          <br />
          2、报名的成员请按时参加课程培训哦，具体情况可以咨询老师。
        </div>
      </div>
    </div>

    <title-circle :title="'上课须知'" :number="'03'"></title-circle>
    <div class="instructions-class">
      <span class="line-left"></span>
      <span class="line-right"></span>
      <div class="instructions-class-info">
        上课时间：2022-03-08
        <br />
        授课地点：重庆市重庆市
        <br />
        咨询电话：13521211222
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import TitleCircle from "@/components/title-circle"
export default {
  components: {
    TitleCircle,
  },
}
</script>
<style lang="less" scoped>
.class-introduce {
  margin-top: 6px;
  background: #fff;
  padding: 1rem 15px;
  .introduce {
    border: 1px solid #ffd4e0;
    padding: 35px 12px 20px 27px;
    border-radius: 10px;
    position: relative;
    margin-top: 5px;
    .class-bg {
      position: absolute;
      background-image: linear-gradient(to left, #efdff3, #c9d2f7, #ffcfdd);
      color: white;
      font-size: 16px;
      height: 25px;
      line-height: 20px;
      top: -10px;
      left: 12px;
    }
    .introduce_main {
      font-size: 14px;
      line-height: 25px;
      color: #666666;
    }
  }
  .notice {
    border: 1px solid #ffcfdd;
    padding: 5px 9px 12px 20px;
    margin-top: 5px;
    position: relative;
    .horn3 {
      position: absolute;
      right: -5px;
      bottom: -3px;
      padding: 35% 50%;
      border-style: solid;
      border-color: #cbd7fa;
      border-width: 0 5px 3px 0;
    }
    .question {
      font-size: 14px;
      color: #333333;
      border-bottom: 1px dashed #ffcfdd;
      padding: 11px 5px;
      span {
        font-size: 16px;
        color: #ffcfdd;
      }
    }
    .answer {
      padding: 12px 0 0 5px;
      display: flex;
      flex-direction: row;
      span {
        font-size: 16px;
        color: #ffcfdd;
        padding-top: 3px;
      }
      div {
        font-size: 14px;
        color: #666666;
        line-height: 30px;
        margin-left: 5px;
      }
    }
  }
  .instructions-class {
    border-color: #ffcfdd;
    border-style: solid;
    border-width: 1px 0 1px 0;
    position: relative;
    .line-left {
      position: absolute;
      border: 4px solid #ffcfdd;
      height: 20px;
      background: #ffcfdd;
      top: 0px;
    }
    .line-right {
      position: absolute;
      border: 4px solid #ffcfdd;
      height: 20px;
      background: #ffcfdd;
      right: 0;
      bottom: 0;
    }
    .instructions-class-info {
      font-size: 14px;
      color: #666666;
      padding: 40px 2px 25px 25px;
      line-height: 30px;
      .w-teacher {
        margin-left: 70px;
      }
    }
  }
}
</style>
