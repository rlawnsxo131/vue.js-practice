<template lang="html">
  <div >
    <hr>
    Child counter : {{childCounter}} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>

export default {
  computed:{
    childCounter:function(){
      return this.$store.getters.getCounter;
    }
  }
}
</script>

<style lang="css">

</style>
