let selectedForecastId = 'today'
export const getSelectedForecastId = () => selectedForecastId
export const selectForecast = (id) => {
  selectedForecastId = id
}
