<template>
  <div class="row items-center">
    <q-card class="main-container">
      <q-card-section class="row justify-around q-pa-xs main-container-header">
        <q-item v-ripple class="text-h6 q-pa-sm text-white" clickable tag="label" @click="ratesClickHandler">RATES
        </q-item>
        <div class="main-container-header-separator bg-white self-center"></div>
        <q-item v-ripple class="text-h6 q-pa-sm text-white" clickable @click="chartsClickHandler">CHARTS</q-item>
      </q-card-section>
      <q-card-section class="q-px-sm q-py-sm">
        <q-input v-model="baseCurrencyAmount" class="q-py-none" clearable debounce="200"
                 dense hide-bottom-space input-class="text-right text-grey-6 base-currency-input" mask="#.##" outlined
                 placeholder="0.00" reverse-fill-mask style="border-radius: 3px" suffix="EUR"></q-input>
      </q-card-section>
      <latest-currency-rates-list v-if="currentTab === CURRENCY_CONVERTER_LATEST_RATES"
                                  :base-currency-amount="baseCurrencyAmount"
                                  :latest-currency-rates="latestCurrencyRates"></latest-currency-rates-list>
      <historical-currency-rates v-else-if="currentTab === CURRENCY_CONVERTER_HISTORICAL_RATES"
                                 :historical-currency-rates-data="historicalCurrencyRates"
                                 @HISTORICAL_CURRENCY_RATES_PERIOD_CHANGED="updateHistoricalCurrencyRates"></historical-currency-rates>
      <q-inner-loading :showing="loading" color="blue-7"></q-inner-loading>
    </q-card>

  </div>

</template>

<script>
  import LatestCurrencyRatesList from "components/LatestCurrencyRatesList";
  import {
    CURRENCY_CONVERTER_HISTORICAL_RATES,
    CURRENCY_CONVERTER_LATEST_RATES
  } from "src/constants/currencyConverterTabs";
  import {
    UPDATE_HISTORICAL_CURRENCY_RATES,
    UPDATE_LATEST_CURRENCY_EXCHANGE_RATES
  } from "src/constants/currencyConverterActions";
  import {
    GET_CURRENCY_CONVERTER_HISTORICAL_RATES,
    GET_CURRENCY_CONVERTER_LATEST_RATES
  } from "src/constants/currencyConverterGetters";
  import HistoricalCurrencyRates from "components/HistoricalCurrencyRates";

  export default {
    name: "SmallCurrencyConverter",
    components: {HistoricalCurrencyRates, LatestCurrencyRatesList},
    data() {
      return {
        CURRENCY_CONVERTER_LATEST_RATES,
        CURRENCY_CONVERTER_HISTORICAL_RATES,
        currentTab: CURRENCY_CONVERTER_LATEST_RATES,
        baseCurrencyAmount: void 0,
        loading: false
      }
    },
    computed: {
      latestCurrencyRates() {
        return this.$store.getters[GET_CURRENCY_CONVERTER_LATEST_RATES];
      },
      historicalCurrencyRates() {
        return this.$store.getters[GET_CURRENCY_CONVERTER_HISTORICAL_RATES];
      }
    },
    async mounted() {
      try {
        this.loading = true;
        if (this.currentTab === CURRENCY_CONVERTER_LATEST_RATES) {
          await this.$store.dispatch(UPDATE_LATEST_CURRENCY_EXCHANGE_RATES)
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false;
      }
    },
    methods: {
      async ratesClickHandler() {
        this.currentTab = CURRENCY_CONVERTER_LATEST_RATES
        this.loading = true
        await this.$store.dispatch(UPDATE_LATEST_CURRENCY_EXCHANGE_RATES)
        this.loading = false
      },
      async chartsClickHandler() {
        this.currentTab = CURRENCY_CONVERTER_HISTORICAL_RATES
        this.loading = true
        await this.$store.dispatch(UPDATE_LATEST_CURRENCY_EXCHANGE_RATES)
        this.loading = false
      },
      updateHistoricalCurrencyRates(value) {
        this.$store.dispatch(UPDATE_HISTORICAL_CURRENCY_RATES, value)
      }
    }
  }
</script>

<style lang="scss">

  .main-container {
    max-width: 500px;
    width: 100%;
  }

  .main-container-header {
    background: linear-gradient(to right, #1590F4, #075088);
  }

  .main-container-header-separator {
    width: 0.12em;
    height: 17px;
  }

  .q-field--outlined .q-field__control{
    border-radius: 8px;
  }

  .base-currency-input{
    height:auto;
    width:58.3%
  }

  .q-field__suffix{
    height:auto;
    width: 50%;
    color: $grey-6
  }

</style>
