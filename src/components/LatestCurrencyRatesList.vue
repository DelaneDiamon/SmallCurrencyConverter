<template>
  <div class="bg-currency-list q-pa-sm">

    <latest-currency-list-item v-for="(pairCurrencyRate, pairCurrencyName) in latestCurrencyRates.rates"
                               :key="pairCurrencyName"
                               :base-currency="latestCurrencyRates.base"
                               :pair-currency-name="pairCurrencyName"
                               :pair-currency-rate="pairCurrencyRate">

    </latest-currency-list-item>

  </div>
</template>

<script>
    import LatestCurrencyListItem from "components/LatestCurrencyListItem";
    export default {
      name: "LatestCurrencyRatesList",
      components: {LatestCurrencyListItem},
      props: { latestCurrencyRates: {type: Object, default: () => { return {base: "", rates: {}} }}},
      computed: {

      }
    }
</script>

<style lang="scss" scoped>

  .bg-currency-list{
    background-color: #E0E0E0;
  }

</style>
