<template>
  <h1 v-on:click="test1">TODO it!</h1>
</template>

<script>
export default {
  methods:{
    test1(){
      this.$emit('test1');
    }
  }

}
</script>

<style lang="css" scoped>
h1{
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
