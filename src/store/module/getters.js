import {GET_LATEST_CURRENCY_CONVERTER_RATES} from "src/constants/currencyConverterGetters";

export default {
    [GET_LATEST_CURRENCY_CONVERTER_RATES](state){
      return state.latestConversionRates;
    }
}
