<template>
  <div id="app">
    Parent counter : {{parentCounter}} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button><br/>
    <button @click="$store.dispatch('asyncIncrement',({by:50, duration:500}))">Increament</button>
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'app',
  methods: {
    //mutation 이용시
    subCounter() {
      this.$store.commit('subCounter');
    },
    //actions 이용시
    addCounter(){
      this.$store.dispatch('addCounter')
    }
  },
  computed:{
    parentCounter(){
      return this.$store.getters.getCounter;
    }
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'child': Child
  }
}
</script>

<style>

</style>
