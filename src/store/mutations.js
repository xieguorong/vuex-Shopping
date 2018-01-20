/*
 * @Author: Marte
 * @Date:   2017-12-07 14:17:17
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-01-16 00:00:08
 */
const STORAGE = 'STORAGE' //增加数据
const DELETE = 'DELETE' //删除

export default {
  [STORAGE](state, id1) {
    state.shoppingData.push(id1);
    localStorage.setItem("shoppingData",JSON.stringify(state.shoppingData));
  },
  [DELETE](state, index){
    state.shoppingData.splice(index,1);
    localStorage.setItem("shoppingData",JSON.stringify(state.shoppingData));
  }

}
