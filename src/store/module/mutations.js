import {SET_CURRENCY_CONVERTER_LATEST_RATES} from "src/constants/currencyConverterMutations";

export default {

    [SET_CURRENCY_CONVERTER_LATEST_RATES] (state, value) {
      state.latestConversionRates = value;
    }

}
