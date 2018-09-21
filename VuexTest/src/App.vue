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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  // Vuex 의 Mutations 메서드 명과 App.vue 메서드 명을 다르게 매칭할 때 {} 사용
  // addCounter:'addCounter' 형식
  methods: {
    ...mapMutations([
      'subCounter'
    ]),
    ...mapActions([
      'addCounter',
    ])
  },
  computed:{
    ...mapGetters({
      parentCounter:'getCounter'
    })
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'child': Child
  }
}
</script>

<style>

</style>
