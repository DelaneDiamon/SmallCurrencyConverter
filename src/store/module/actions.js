import {UPDATE_LATEST_CURRENCY_EXCHANGE_RATES} from "src/constants/currencyConverterActions";
import axios from 'axios'
import {CURRENCY_CONVERTER_LATEST_RATES} from "src/constants/currencyConverterEndpoints";
import {SET_CURRENCY_CONVERTER_LATEST_RATES} from "src/constants/currencyConverterMutations";

export default {
  async [UPDATE_LATEST_CURRENCY_EXCHANGE_RATES]( { commit }) {
    try {
      let rates = await axios.get(CURRENCY_CONVERTER_LATEST_RATES)
      if (rates){
        commit(SET_CURRENCY_CONVERTER_LATEST_RATES, rates.data)
      }
    } catch (error) {
      console.log(error)
    }
  },

  // async [UPDATE_LATEST_CURRENCY_EXCHANGE_RATES](commit) {
  //   try {
  //     await axios.get(CURRENCY_CONVERTER_LATEST_RATES)
  //
  //     commit()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

}
