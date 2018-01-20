<template>
  <div class="wrap">
    <div>
      <div style="height: 40px;background: #000;color:#FFF;line-height: 40px;">购物车</div>
      <div v-if="shoppingData.length>0" style="margin-top: 20px;">
        <ul>
          <li v-for="(item,index) in shoppingData" :id="item.id" :key="item.id">
            <el-row>
              <el-col :span="20"><el-row class="text item">
                <el-col :span="5">
                  名称:
                </el-col>
                <el-col :span="19">
                  {{item.title}}
                </el-col>
              </el-row>
                <el-row class="text item">
                  <el-col :span="5">
                    颜色:
                  </el-col>
                  <el-col :span="19">
                    {{item.color}}
                  </el-col>
                </el-row>
                <el-row class="text item">
                  <el-col :span="5">
                    尺寸:
                  </el-col>
                  <el-col :span="19">
                    {{item.yardage}}
                  </el-col>
                </el-row>
                <div>
                  <el-row>
                    <el-col :span="2">
                      <span @click='redice(index)'>-</span>
                    </el-col>
                    <el-col :span="16">
                      <el-input style="width:100%;" type="tel" :value="item.numSum" @click='Calculation(-1)'></el-input>
                    </el-col>
                    <el-col :span="2">
                      <span @click='add(index)'>+</span>
                    </el-col>
                  </el-row>
                  <el-row class="text item" style="margin-top: 20px;">
                    <el-col :span="5">
                      价格:
                    </el-col>
                    <el-col :span="19">
                      {{item.Price}}
                    </el-col>
                  </el-row>
                  <el-row class="text item" v-if="item.total!=''">
                    <el-col :span="5">
                      单项总价:
                    </el-col>
                    <el-col :span="19">
                      {{item.total}}
                    </el-col>
                  </el-row>
                </div></el-col>
              <el-col :span="4" style="padding-top: 90px;"> <div>
                <i class="iconfont icon-juxing" :class="{current:item.checked}" @click="check(index)"></i>
              </div>
                <span @click="removeIng(item,index)"><el-button type="danger">删除</el-button></span></el-col>
            </el-row>


          </li>
          <div class="fix-bom" v-if="shoppingData.length>0">
            <span @click="select(checkedAll)" :class="{current:checkedAll}">全选
              <i class="iconfont icon-juxing"></i>
              </span>
            <span>总价:{{addMoney}}</span> <span>去付款</span>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {
      sumArr: [],
      sumTotal:0,
      checkedAll:true,
    }
  },
  computed: {
    ...mapState({
      "shoppingData": "shoppingData",
    }),
    addMoney(){
      // console.log(money);
      this.sumTotal=0;
      // console.log(money);
      for( var i=0;i<this.shoppingData.length;i++){
        /* 计算单个总价 */
        this.shoppingData[i].total=this.shoppingData[i].Price*this.shoppingData[i].numSum;
        /* 把选中得计算总价 */
        if(this.shoppingData[i].checked){
          this.sumTotal+=this.shoppingData[i].Price*this.shoppingData[i].numSum;
        }
      }
      return this.sumTotal;
    }
  },
  methods: {

    ...mapMutations([
      'DELETE',
    ]),
    add:function(index){
      var _this=this;
      _this.shoppingData[index].numSum++
    },
    redice:function(index){
      var _this=this;
      if(_this.shoppingData[index].numSum>1){
        _this.shoppingData[index].numSum--
      }
    },
    check(itemOk) {
      /* 点击表单取反取正（如果未选中（false）就选中（true），如果选中(true)就未选中(false)）  */
      this.shoppingData[itemOk].checked=!this.shoppingData[itemOk].checked;

      for(var i=0;i<this.shoppingData.length;i++){
        //如果有一个没有选中，让全选为false
        if(this.shoppingData[i].checked==false){
          this.checkedAll=false;
          return
        }
      }
      //如果遍历完，都选中了（true），那么全选选中
      this.checkedAll=true;
    },
    select(a) {
      this.checkedAll=!this.checkedAll;
      for(var i=0;i<this.shoppingData.length;i++){
        this.shoppingData[i].checked=this.checkedAll;
      }
    },
    /* 删除 */
    removeIng(index){
      this.DELETE(index);
    }
  }
}
</script>
<style scoped>
.wrap {
  max-width: 640px;
  margin: 0 auto;
  height: 500px;
}

.current {
  color: red!important;
}
div{
  font-size: 18px!important;
}
.fix-bom {
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000;
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

.box-card {
  width: 480px;
}
</style>
