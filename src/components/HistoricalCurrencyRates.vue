<template>
  <div class="column justify-center">
    <div class="row justify-center q-gutter-sm q-pb-sm">
      <div class="column items-center justify-center pair-currency-selection-label">TO</div>
      <q-select :value="currencyPairName"
                :options="currencyPairOptions"
                options-dense
                class="justify-center items-center"
                input-class="justify-center items-center"
                color="primary"
                dense
                hide-dropdown-icon
                label-color="primary"
                outlined
                unelevated
                @input="updateCurrencyPairSelection"
      >
        <template v-slot:prepend>
          <div class="full-height column col-grow items-center justify-center">
            <q-icon class="pair-currency-selection-chevron" name="fas fa-chevron-down" size="0.6em"></q-icon>
          </div>
        </template>
      </q-select>
    </div>
    <div class="row bg-info justify-center">
      <div class="row q-gutter-x-sm q-py-xs">
        <q-chip clickable dense square color="primary" text-color="white"
                :class="{'bg-white text-black' : currentRatesPeriod !== DAY}"
                @click="updateHistoricalRatesPeriod(DAY)">1D
        </q-chip>
        <q-chip clickable dense square color="primary" text-color="white"
                :class="{'bg-white text-black' : currentRatesPeriod !== MONTH}"
                @click="updateHistoricalRatesPeriod(MONTH)">1M
        </q-chip>
        <q-chip clickable dense square color="primary" text-color="white"
                :class="{'bg-white text-black' : currentRatesPeriod !== YEAR}"
                @click="updateHistoricalRatesPeriod(YEAR)">1Y
        </q-chip>
      </div>
    </div>
    <div class="chart-container q-px-sm q-pb-sm bg-info">
      <time-series-apex-charts class="bg-white bg-info q-pa-none historical-rates-container"
                               :chart-data="historicalCurrencyRatesData.chartData"
                               :chart-options="historicalCurrencyRatesData.chartOptions"></time-series-apex-charts>
    </div>

  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import {DAY, MONTH, YEAR} from "src/constants/currencyConverterHistoricalRatesPeriodOptions";
  import {HISTORICAL_CURRENCY_RATES_PERIOD_CHANGED} from "src/constants/currencyConverterEventNames";
  import currencyConverterSymbols, {USD} from "src/constants/currencyConverterSymbols";
  import TimeSeriesApexCharts from "components/TimeSeriesApexCharts";

  export default {
    name: "HistoricalCurrencyRates",
    components: {TimeSeriesApexCharts},
    props: {
      historicalCurrencyRatesData: {
        type: Object, default: () => {
          return {
            chartData: {},
            chartOptions: {}
          }
        }
      }
    },
    data() {
      return {
        DAY,
        MONTH,
        YEAR,
        currencyPairName: USD,
        currencyPairOptions: currencyConverterSymbols,
        currentRatesPeriod: YEAR,
      }
    },
    mounted() {
      this.updateHistoricalRates(this.currentRatesPeriod)
    },
    methods: {
      updateCurrencyPairSelection(value) {
        this.currencyPairName = value;
        this.updateHistoricalRates()
      },
      updateHistoricalRatesPeriod(value) {
        this.currentRatesPeriod = value
        this.updateHistoricalRates()
      },
      updateHistoricalRates() {
        let apiParams = {
          symbols: "",
          start_at: "",
          end_at: ""
        }

        apiParams.symbols = this.currencyPairName;

        let now = dayjs();
        let nowFormatted = now.format("YYYY-MM-DD");
        switch (this.currentRatesPeriod) {
          case DAY: {
            apiParams.start_at = now.add(-2, 'day').format("YYYY-MM-DD")
            break;
          }
          case MONTH: {
            apiParams.start_at = now.add(-1, 'month').format("YYYY-MM-DD")
            break;
          }
          case YEAR: {
            apiParams.start_at = now.add(-1, 'year').format("YYYY-MM-DD")
            break;
          }
        }

        apiParams.end_at = nowFormatted

        this.$emit(HISTORICAL_CURRENCY_RATES_PERIOD_CHANGED, apiParams)
      }
    }
  }
</script>

<style lang="scss">
  .pair-currency-selection-chevron {
    color: #7799BE
  }

  .pair-currency-selection-label {
    color: #7F7F7F
  }

  .chart-container {
    width: 100%;
  }

  .historical-rates-container {
    border-radius: 8px;
  }

  .q-field__native{
    color: $primary
  }

</style>
