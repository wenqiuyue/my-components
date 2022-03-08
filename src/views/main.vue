<template>
  <div class="com_con">
    <h1 class="title">组件列表</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="组件名" />
      <el-table-column prop="address" label="路径" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleInfo(scope.row.type)"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialog" title=""
      ><div class="dialog_con">
        <TitleCom v-if="showType == 1"></TitleCom>
        <TitleCircle v-else-if="showType == 2"></TitleCircle>
        <TitleBg v-else-if="showType == 3"></TitleBg>
        <Petal v-else-if="showType == 4"></Petal>
        <Card v-else-if="showType == 5"></Card>
        <Star v-else-if="showType == 6"></Star>
        <Empty v-else-if="showType == 7"></Empty>
        <Card1 v-else-if="showType == 8"></Card1></div
    ></el-dialog>
  </div>
</template>
<script>
import TitleCom from "@/components/title/index.vue"
import TitleCircle from "@/components/title-circle"
import TitleBg from "@/components/title-bg"
import Petal from "@/components/petal"
import Card from "@/components/card"
import Star from "@/components/star"
import Empty from "@/components/empty"
import Card1 from "@/components/card1"
export default {
  components: {
    TitleCom,
    TitleCircle,
    TitleBg,
    Petal,
    Card,
    Star,
    Empty,
    Card1,
  },
  data() {
    return {
      showType: null,
      dialog: false,
      tableData: [
        {
          name: "title",
          address: "components/title",
          type: 1,
        },
        {
          name: "title-circle",
          address: "components/title-circle",
          type: 2,
        },
        {
          name: "title-bg",
          address: "components/title-bg",
          type: 3,
        },
        {
          name: "petal(花瓣序号)",
          address: "components/petal",
          type: 4,
        },
        {
          name: "star(星星序号)",
          address: "components/star",
          type: 6,
        },
        {
          name: "card(卡片)",
          address: "components/card",
          type: 5,
        },
        {
          name: "card(卡片1)",
          address: "components/card1",
          type: 8,
        },
        {
          name: "empty(无数据)",
          address: "components/empty",
          type: 7,
        },
      ],
    }
  },
  methods: {
    handleInfo(val) {
      this.showType = val
      this.dialog = true
    },
  },
}
</script>
<style lang="less" scoped>
.com_con {
  .title {
    text-align: center;
  }
}
.dialog_con {
  border: 1px solid #eeeeee;
  padding: 1rem;
}
</style>
