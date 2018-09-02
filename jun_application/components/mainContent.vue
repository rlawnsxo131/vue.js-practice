<template lang="html">
  <div class = "mainContent">
    Todo List</br></br>
    <span v-if="itemLength > 0">
      <ul v-for="(todoItem,index) in todoItems" v-bind:key="todoItem">
        <i>{{todoItem}}</i>
      </ul>
    </span>
    <span v-else>작성한 일정이 없습니다</span>
  </div>
</template>

<script>
export default {
  props:['propsdata','itemLength','todoItems']
}
</script>

<style lang="css">
.mainContent{
  position: absolute;
  text-align: center;
  font-size: 2.0rem;
  width:92.5%;
  height: 85%;
  left: 6.5%;
  top:13%;
  /* border: 5px solid blue; */
}


</style>
