<template>
  <div class="clearAllContainer">
    <span class="claearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
    methods: {
      clearTodo(){
        this.$emit('removeAll');
      }
    }
}
</script>

<style lang="css" scoped>
  .clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .claearAllBtn{
    color: #e20303;
    display: black;
  }
</style>
