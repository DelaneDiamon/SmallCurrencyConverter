<template>
  <div class="bg-info q-pa-sm scroll rates-container">

    <latest-currency-list-item v-for="(pairCurrencyRate, pairCurrencyName) in latestCurrencyRates.rates"
                               :key="pairCurrencyName"
                               :base-currency-name="latestCurrencyRates.base"
                               :base-currency-amount="baseCurrencyAmount"
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
    props: {
      latestCurrencyRates: {
        type: Object, default: () => {
          return {base: "", rates: {}}
        }
      },
      baseCurrencyAmount: {type: String, default: "0.00"}
    },
    computed: {}
  }
</script>
<style lang="scss">
    .rates-container{
      max-height: 500px;
      height: 100%;
    }
</style>
