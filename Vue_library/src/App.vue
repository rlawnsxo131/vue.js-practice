<template>
  <div id="app">
    <button type="button" name="button" class="btn btn-primary btn-lg">Large button</button>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from './Chart.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
      'Chart': Chart
  }
}
</script>

<style>

</style>
