import {
  GET_CURRENCY_CONVERTER_HISTORICAL_RATES,
  GET_CURRENCY_CONVERTER_LATEST_RATES
} from "src/constants/currencyConverterGetters";
import {prepareTimeSeriesApexChartData} from "src/utils/dataFormat";
import {createApexChartOptions} from "src/utils/apexChartsOptions";

export default {
  [GET_CURRENCY_CONVERTER_LATEST_RATES](state) {
    return state.latestConversionRates;
  },
  [GET_CURRENCY_CONVERTER_HISTORICAL_RATES](state) {

    return {
      chartData: prepareTimeSeriesApexChartData(state.historicalConversionRates, state.historicalConversionRatesSymbols),
      chartOptions: createApexChartOptions()
    }
  }
}
