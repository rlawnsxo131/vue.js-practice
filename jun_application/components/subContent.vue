<template lang="html">
  <section class="subContent">
    Todo List Contents<br/><br/>
    <span v-if="itemLength > 0">
      <ul v-for="(todoItem,index) in todoItems" v-bind:key="todoItem">
        <i class="show" v-on:click="$emit('showContent',todoItem)">{{todoItem}}</i>
        <Strong v-on:click="$emit('clear',todoItem,index)">&nbsp&nbspX</Strong>
      </ul>
    </span>
    <span v-else>작성한 일정이 없습니다</span>



    <!-- 일정 추가 모달 -->
    <modal v-if="showModal" >
      <h3 slot="header">일정을 입력하세요</h3>
      <span slot="footer">
        일정을 입력하세요
        <span v-on:keyup.enter='addToRes'>
          <input type="text" v-model="title" style="width:300px;height:50px;">
          <input type="textarea" v-model="content" style="width:300px;height:200px;">
        </span>
          <i v-on:click='addToRes'>
            <span class="modalButton">확인</span>
          </i>
      </span>
    </modal>
    <!-- 해당 글 상세내용 모달 -->
    <modal v-if="showModalContent">
      <h3 slot="header">상세내용</h3>
      <span slot="footer">
        상세내용
        <span>
          <input type="text" readonly v-bind:value="oneTitle" style="width:300px;height:50px;font-size:2.0rem;">
          <input type="textarea" readonly v-bind:value="oneContent" style="width:300px;height:200px;font-size:2.0rem;">
        </span>
        <i v-on:click="$emit('closeContent')">
          <span class="modalButton">확인</span>
        </i>
      </span>
    </modal>
  </section>
</template>

<script>
import modal from './common/Modal.vue'

export default {
  props:['fivelength',
         'oneTitle',
         'oneContent',
         'showModal',
         'showModalContent',
         'todoItems',
         'itemLength',
         'fiveAddList'
        ],
  data(){
    return{
      title:'제목',
      content:'내용'
    }
  },
  components:{
      modal:modal
  },
  watch:{
    title :(data) => {
      data
    },
    content : (data) => {
      data
    }
  },
  methods:{
    addToRes(){
      var title = this.title && this.title.trim();
      var content = this.content && this.content.trim();
      this.$emit('addToRes',title,content);
      this.clearInput();
    },
    clearInput(){
      this.title='제목';
      this.content='내용';
    }
  }
}

</script>

<style lang="css">
.subContent{
  position: absolute;
  text-align: center;
  font-size: 2.0rem;
  width:92.5%;
  left: 6.5%;
  top:13%;
  /* border: 5px solid blue; */
}

.show:hover{
  color: blue;
}
ul > strong:hover{
  color: red;
}
.modalButton:hover{
  color: blue;
}

</style>
