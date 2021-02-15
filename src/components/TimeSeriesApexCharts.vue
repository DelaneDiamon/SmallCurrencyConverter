<template>
    <apexchart  type="area" :options="chartOptions" :series="chartData"></apexchart>
</template>

<script>
  export default {
    name: "TimeSeriesApexCharts",
    props: {
      chartData: {
        type: Array,
        default: () => []
      },
      chartOptions: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style scoped>

</style>
