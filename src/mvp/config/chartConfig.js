export const getChartOptions = (data) => ({
    chart: { type: 'bar', height: '100%', toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, horizontal: true } },
    colors: ['#1e40af'],
    grid: { padding: { top: -20 } },
    series: [{ name: 'Dane', data: data }],
    dataLabels: { enabled: false }
});
