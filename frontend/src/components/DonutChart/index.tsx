/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {

  const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  }
  // Gera duplicitade em chamadas
  // FORMA ERRADA
  let chartData: ChartData = { labels: [], series: [] };

  // FORMA ERRADA
  axios.get(`${BASE_URL}/sales/amount-by-saller`)
    .then(response => {
      const data = response.data as SaleSum[];
      const myLabels = data.map(x => x.sellerName);
      const mySeries = data.map(x => x.sum);

      chartData = { labels: myLabels, series: mySeries }
      console.log(chartData)
    });

  //const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //  labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  //}

  const options = {
    legend: {
         show: true

    }
  }
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"

    />
  );
}
