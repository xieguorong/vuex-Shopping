<template>
  <div class="wrap">
    <div>
      <router-view></router-view>
       <ul>
           <li v-for="(item,index) in productList">
              <input type="checkbox" name="infor" v-model="item.isTrick" @click="check(index)">
              <div style="display: inline-block;margin-left:10px;">
                 <span @click="add(index)">+</span>
                 <input type="text" name="" style="width:30px;height:20px;" v-model="item.num">
                 <span @click="redice(index)">-</span>
              </div>
              <span>{{item.name}}</span>
              <span>{{item.price}}</span>
              <span>{{item.sum}}</span>
           </li>
       </ul>
       <div class="add">
           <input type="checkbox" name="add"  v-model="checkAll" @click="checkAllEven">全选
           <span>共计<i>{{addMoney}}</i>元</span>
       </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
       productList:[
           {
            name:"毛衣",
            price:"10",
            num:10,
            isTrick:true,
             sum:0
           },
           {
            name:"情趣内衣",
            price:"100",
            num:10,
            isTrick:true,
             sum:0
           },
           {
            name:"胸罩",
            price:"1000",
            num:10,
            isTrick:true,
             sum:0
           }
       ],
       checkAll:true
    }
  },
  created() {
    // this.check();
  },
  computed: {
     /* 总价 */
     addMoney(){
        console.log(money);
        var money=0;
        console.log(money);
        for( var i=0;i<this.productList.length;i++){
          /* 计算单个总价 */
          this.productList[i].sum=this.productList[i].price*this.productList[i].num;
           /* 把选中得计算总价 */
           if(this.productList[i].isTrick){
              money+=this.productList[i].price*this.productList[i].num;
           }
        }
        return money.toFixed(2)
     }
  },
  methods: {
     check:function(index){
         var _this=this;
         /* 点击表单取反取正（如果未选中（false）就选中（true），如果选中(true)就未选中(false)）  */
         _this.productList[index].isTrick=!_this.productList[index].isTrick;

         for(var i=0;i<_this.productList.length;i++){
           //如果有一个没有选中，让全选为false
             if(_this.productList[i].isTrick==false){
                 _this.checkAll=false;
                 return
             }
         }
          //如果遍历完，都选中了（true），那么全选选中
          _this.checkAll=true;

     },
     checkAllEven:function(){
          // var _this=this;
       /* 点击表单取反取正（如果未选中（false）就选中（true），如果选中(true)就未选中(false)）  */
          this.checkAll=!this.checkAll;
         for(var i=0;i<this.productList.length;i++){
             this.productList[i].isTrick=this.checkAll;
         }
     },
     add:function(index){
        var _this=this;
      _this.productList[index].num++
     },
     redice:function(index){
        var _this=this;
        if(_this.productList[index].num>1){
          _this.productList[index].num--
        }
     }
  }
}

</script>
<style scoped>
.wrap {
  max-width: 640px;
  margin: 0 auto;
  height: 500px;
  border: 1px solid red;
}

.current {
  color: red!important;
}

.fix-bom {
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: blue;
  color: #FFF;
}

</style>
