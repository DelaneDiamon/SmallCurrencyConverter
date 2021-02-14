<template>
  <div class="row q-pa-sm items-center">
    <q-card class="main-container">
      <q-card-section class="row justify-around q-pa-xs main-container-header">
        <q-item v-ripple clickable tag="label" :class="['text-h6', 'q-pa-sm', 'text-white', {'text-underline': true}]">RATES</q-item>
        <div class="main-container-header-separator bg-white self-center"></div>
        <q-item v-ripple clickable class="text-h6 q-pa-sm text-white">CHARTS</q-item>
      </q-card-section>
      <q-card-section class="q-px-sm">
        <q-input input-class="text-grey-7" mask="#.##" reverse-fill-mask suffix="EUR" outlined dense style="border-radius: 3px"></q-input>
      </q-card-section>
      <latest-currency-rates-list v-if="true" :latest-currency-rates="latestCurrencyRates"></latest-currency-rates-list>
      <q-inner-loading color="blue-7" :showing="loading"></q-inner-loading>
    </q-card>

  </div>

</template>

<script>
    import LatestCurrencyRatesList from "components/LatestCurrencyRatesList";
    import {
      CURRENCY_CONVERTER_HISTORICAL_RATES,
      CURRENCY_CONVERTER_LATEST_RATES
    } from "src/constants/currencyConverterTabs";
    import {UPDATE_LATEST_CURRENCY_EXCHANGE_RATES} from "src/constants/currencyConverterActions";
    import {GET_LATEST_CURRENCY_CONVERTER_RATES} from "src/constants/currencyConverterGetters";
    export default {
        name: "SmallCurrencyConverter",
      components: {LatestCurrencyRatesList},
      data() {
        return {
          currentTab: CURRENCY_CONVERTER_LATEST_RATES,
          loading: false
        }
      },
      computed: {
        latestCurrencyRates(){
          return this.$store.getters[GET_LATEST_CURRENCY_CONVERTER_RATES];
        }
      },
      async mounted(){
          try {
            this.loading = true;
            if (this.currentTab === CURRENCY_CONVERTER_LATEST_RATES){
              await this.$store.dispatch(UPDATE_LATEST_CURRENCY_EXCHANGE_RATES)
            }
            else if (this.currentTab === CURRENCY_CONVERTER_HISTORICAL_RATES){
              console.log()
            }
          }
          catch(error){
            console.log(error)
          }
          finally{
            this.loading = false;
          }
      }
    }
</script>

<style lang="scss" scoped>

  .main-container{
    max-width: 300px;
    width: 100%;
  }

  .main-container-header{
    background: linear-gradient(90deg, #1590F4 10%, #075088);
  }

  .main-container-header-separator{
    width: 0.12em;
    height: 17px;
  }


</style>
