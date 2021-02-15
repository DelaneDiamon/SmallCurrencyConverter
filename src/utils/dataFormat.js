export function prepareTimeSeriesApexChartData(apiData, symbols) {

  let datasets = {};

  let dates = Object.keys(apiData.rates).sort();
  if (dates.length > 0) {
    dates.forEach(date => {

      symbols.forEach(symbol => {
        if (!datasets[symbol]) {
          datasets[symbol] = {
            name: symbol,
            data: []
          }
        }
        datasets[symbol].data.push({x: date, y: apiData.rates[date][symbol]})
      })
    })
  }
  return Object.values(datasets)
}
