<template>
  <q-item class="bg-white q-py-none q-mb-sm q-px-sm justify-between shadow-3" style="border-radius: 8px">
    <q-item-section class="text-h5 col-4">{{pairCurrencyName}}</q-item-section>
    <q-item-section class="items-center col-4">
      <q-icon color="grey" name="las la-chevron-circle-right" size="xs"></q-icon>
    </q-item-section>
    <q-item-section class="justify-center">
      <q-item-label class="text-bold text-black currency-rate q-mt-none text-right">{{pairAmountForBaseAmount}}</q-item-label>
      <q-item-label class="currency-rate-subtitle q-mt-none text-grey-7 text-right">1 {{baseCurrencyName}} = {{baseToPairRate}} {{pairCurrencyName}}</q-item-label>
      <q-item-label class="currency-rate-subtitle text-grey-7 text-right">1 {{pairCurrencyName}} = {{pairToBaseRate}} {{baseCurrencyName}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
  import {Decimal} from 'decimal.js'
    export default {
        name: "LatestCurrencyListItem",
        props: {
          baseCurrencyName: {type: String, default: ""},
          baseCurrencyAmount: {type: Number, default: 0},
          pairCurrencyName: {type: String, default: ""},
          pairCurrencyRate: {type: Number, default: 0}
        },
        computed: {
            pairAmountForBaseAmount() {
              return Decimal.mul(this.baseCurrencyAmount, this.pairCurrencyRate).toFixed(2)
            },
            baseToPairRate() {
              return new Decimal(this.pairCurrencyRate).toFixed(4)
            },
            pairToBaseRate() {
              return Decimal.div(1, this.pairCurrencyRate).toFixed(4)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .currency-rate{
    font-size: 0.7em;
  }

  .currency-rate-subtitle{
    font-size: 0.5em;
    letter-spacing: 0.033333em;
  }

</style>
