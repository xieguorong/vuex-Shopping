<template>
  <div class="hello" style="margin-top: 60px;">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <router-link to="/foo/0">
            <img src="https://m.360buyimg.com/mobilecms/s357x357_jfs/t3391/79/1963324994/297093/187de6d4/583ced0fN27e50577.jpg!q50.jpg" style="opacity: 1;width:100%;">
            <span style="margin-top: 20px;display: inline-block;">手机1</span>
          </router-link>
        </div>

      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">

          <router-link to="/foo/1">
            <img src="https://m.360buyimg.com/mobilecms/s357x357_jfs/t9082/256/1635073647/389282/59881773/59bf3c47N91d65c73.jpg!q50.jpg" style="opacity: 1;width:100%;">
            <span style="margin-top: 20px;display: inline-block;">手机2</span>
          </router-link>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
