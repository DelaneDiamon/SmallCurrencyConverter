import {
  UPDATE_HISTORICAL_CURRENCY_RATES,
  UPDATE_LATEST_CURRENCY_EXCHANGE_RATES
} from "src/constants/currencyConverterActions";
import axios from 'axios'
import {
  CURRENCY_CONVERTER_HISTORICAL_RATES_BASE_URL,
  CURRENCY_CONVERTER_LATEST_RATES_URL
} from "src/constants/currencyConverterEndpoints";
import {
  SET_CURRENCY_CONVERTER_HISTORICAL_RATES,
  SET_CURRENCY_CONVERTER_HISTORICAL_RATES_SYMBOLS,
  SET_CURRENCY_CONVERTER_LATEST_RATES
} from "src/constants/currencyConverterMutations";

export default {
  async [UPDATE_LATEST_CURRENCY_EXCHANGE_RATES]({commit}) {
    try {
      let rates = await axios.get(CURRENCY_CONVERTER_LATEST_RATES_URL)
      if (rates) {
        commit(SET_CURRENCY_CONVERTER_LATEST_RATES, rates.data)
      }
    } catch (error) {
      console.log(error)
    }
  },

  async [UPDATE_HISTORICAL_CURRENCY_RATES]({commit}, payload) {
    try {
      let historicalRates = await axios.get(CURRENCY_CONVERTER_HISTORICAL_RATES_BASE_URL, {params: payload})
      if (historicalRates) {
        commit(SET_CURRENCY_CONVERTER_HISTORICAL_RATES, historicalRates.data)
        commit(SET_CURRENCY_CONVERTER_HISTORICAL_RATES_SYMBOLS, payload.symbols)
      }
    } catch (error) {
      console.log(error)
    }
  }

}
