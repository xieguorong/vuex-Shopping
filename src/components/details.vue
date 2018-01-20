<template>
  <div class="hello">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表详情</span>
        <el-button style="float: right; padding: 3px 0" type="text">*</el-button>
      </div>
      <div class="text item">路由编号:{{ $route.params.id }}</div>
      <div class="text item">
        名称：{{title}}
      </div>
      <div class="text item">金额:{{Price}}</div>
      <div @click="flag=!flag" class="text item" style="color:red;">请选择规格<i class="el-icon-arrow-down"></i></div>
      <div v-show="flag" class="text item" style="margin-top: 20px;">
        <ul>
          <li v-for="(item,index) in hui" :class="{'current':index === status1}" @click="p1(index)">{{item}}</li>
        </ul>
        <ul>
          <li v-for="(item1,index) in hui1" :class="{'current':index === status2}" @click="p2(index)">{{item1}}</li>
        </ul>
        <div>
          <el-row style="margin-top: 20px;">
            <el-col :span="2"> <span @click="Calculation(-1)">-</span></el-col>
            <el-col :span="16"><el-input type="tel" :value="Number1"></el-input></el-col>
            <el-col :span="2"><span @click="Calculation(1)">+</span></el-col>
          </el-row>
        </div>
      </div>
    </el-card>
    <div class="title">
      <div class="fix-bom">
        <el-row>
          <el-col :span="12">
            <el-button @click="see()" type="success">购物车 <span v-if="shoppingData.length>0">{{shoppingData.length}}</span></el-button>
          </el-col>
          <el-col :span="12">
            <el-button @click="addto()" type="primary"> 加入购物车</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  // <!-- A数据 -->
const a = {
  title: "你好冬天",
  Price: 80,
  numSum: 1,
  hui: ["黑色", "白色"],
  hui1: ["110cm（建议4-5岁）", "160cm（建议14-15岁）", "150cm（建议12-13岁）"]
}
  // <!-- B 数据 -->
const b = {
  title: "我去我去",
  Price: 20,
  numSum: 1,
  hui: ["蓝色", "紫色"],
  hui1: ["10cm", "11cm", "12cm"]
}
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      flag: false,
      Number1: 0,
      //临时判断路由取数据
      Price: this.$route.params.id == 0 ? a.Price : b.Price,
      title: this.$route.params.id == 0 ? a.title : b.title,
      hui: this.$route.params.id == 0 ? a.hui : b.hui,
      hui1: this.$route.params.id == 0 ? a.hui1 : b.hui1,
      status1: null,
      status2: null,
      object1: {}
    }
  },
  computed: {
    ...mapState({
      "shoppingData": "shoppingData"
    })
  },
  methods: {
    ...mapMutations([
      "STORAGE"
    ]),
    p1(index1) {
      this.status1 = index1;
      Vue.set(this.object1, "color", this.hui[index1])
    },
    p2(index2) {
      this.status2 = index2;
      Vue.set(this.object1, "yardage", this.hui1[index2])
    },
    Calculation(sum) {
      if (sum === 1) {
        this.Number1++
          Vue.set(this.object1, "numSum", this.Number1)
      } else {
        if (this.Number1 <= 1) return
        this.Number1--
          Vue.set(this.object1, "numSum", this.Number1)
      }
    },
    addto() {
      if(!this.object1.hasOwnProperty("color")){
        this.$message({
          message: '请选择颜色',
          type: 'warning'
        });
        return;
      }
      if(!this.object1.hasOwnProperty("yardage")){
        this.$message({
          message: '请选择尺码',
          type: 'warning'
        });
        return;
      }
      if(this.Number1==0){
        this.$message({
            message: '请选择数量',
            type: 'warning'
          }
        );
        return;
      }
      Vue.set(this.object1, "id", this.$route.params.id)
      Vue.set(this.object1, "title", this.title)
      Vue.set(this.object1, "Price", this.Price)
      Vue.set(this.object1, "total", 0)
      Vue.set(this.object1, "checked", true)
      let idExist = this.shoppingData.find((item) => {
        return item.id == this.$route.params.id
      })
      if (!idExist) {
        this.$message({
          message: '恭喜你，抢购成功',
          type: 'success'
        });
        this.STORAGE(this.object1)

      } else {
        this.$message.error('不可以重复加入');
      }
    },
    see() {
      this.$router.push('/ShoppingCart');
    },
    watch: {
      status1() {
        console.log("发生变化了")
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
div{
  font-size:20px!important;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.current {
  color: red;
}

.fix-bom {
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: cadetblue;
  color: #FFF;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
