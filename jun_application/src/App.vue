<template>
<div id="app">
  <router-view name="header"></router-view>
  <router-link class="menu" to="/">Main</router-link>
  </br>
  <router-link class="menu" to="/todo">Todo</router-link>
  <router-view name="Content"
      v-bind:oneContent="oneContent"
      v-bind:oneTitle="oneTitle"
      v-bind:todoItems="todoItems"
      v-bind:showModal="showModal"
      v-bind:showModalContent="showModalContent"
      v-bind:itemLength="itemLength"s
      v-on:addToRes="addToRes"
      v-on:closeContent="closeContent"
      v-on:clear="clear"
      v-on:showContent="showContent">
  </router-view>
  <span id="addToSpan" v-on:click='addTodo'>일정 추가</span>

</div>
</template>




<script>
export default {
  name:'app',
  data() {
    return{
      todoItems: [],
      showModal: false,
      showModalContent: false,
      oneTitle: '',
      oneContent: '',
      nowLength:'',
      span:''
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  computed: {
    //글 목록이 있나 없나 확인
    itemLength: function() {
      return this.todoItems.length;
    }
  },
  methods: {
    //저장 실행시
    addToRes(title,content) {
      if(title !== '제목' && content !== '내용' && title !== '' && content !== ''){
        localStorage.setItem(title,content);
        this.todoItems.push(title);
        this.showModal = !this.showModal;
      }else{
        this.showModal = !this.showModal;
      }
    },
    //일정 추가 버튼 클릭시 모달 open
    addTodo() {
      this.showModal = !this.showModal;
    },
    //X버튼 클릭시 해당 글 삭제
    clear(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);
    },
    //해당글 클릭시 상세내용 open
    showContent(todoItem){
      this.showModalContent = !this.showModalContent;
      this.oneContent = localStorage.getItem(todoItem);
      this.oneTitle = todoItem;
    },
    //해당글 상세내용 닫기
    closeContent(){
      this.showModalContent = !this.showModalContent;
    },
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.menu {
  position: relative;
  text-decoration: none;
  font-size: 2.5rem;
  /* border: 5px solid red; */
}
#addToSpan{
  position: fixed;
  width:10%;
  height: 10%;
  bottom:15%;
  right: 5%;
  font-size: 2.0rem;
  color: black;
  /* border: 3px solid red; */
}
#addToSpan:hover{
  color: blue;
}

</style>
