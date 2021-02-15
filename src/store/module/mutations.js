import {
  SET_CURRENCY_CONVERTER_HISTORICAL_RATES,
  SET_CURRENCY_CONVERTER_HISTORICAL_RATES_SYMBOLS,
  SET_CURRENCY_CONVERTER_LATEST_RATES
} from "src/constants/currencyConverterMutations";

export default {

  [SET_CURRENCY_CONVERTER_LATEST_RATES](state, value) {
    state.latestConversionRates = value;
  },
  [SET_CURRENCY_CONVERTER_HISTORICAL_RATES](state, value) {
    state.historicalConversionRates = value;
  },
  [SET_CURRENCY_CONVERTER_HISTORICAL_RATES_SYMBOLS](state, value) {
    state.historicalConversionRatesSymbols = value.split(',');
  }
}
