<template lang="html">
  <div >
    <hr>
    Child counter : {{childCounter}} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
        childCounter:'getCounter'
      })
    }
}

</script>

<style lang="css">

</style>
