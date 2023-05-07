'use client'

import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"

type Props = {
  data: number[];
  title: string;
  subtitle: string;
}
export default function BarChartYearlyData(
  { data, title, subtitle }: Props
) {

  // // const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

  console.log(title, subtitle)
  console.log(data)

  const options = {
    chart: {
      type: "column"
    },
    title: {
      text: title,
      fontSize: "18.0em"
    },
    subtitle: {
      text: subtitle,
      fontSize: '4.0em'
    },
    xAxis: {
      labels: {
        enabled: true,
      },
      // categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      tickLength: 1,
      style: {
        fontSize: '1.5em'
      }
    },
    yAxis: {
      labels: {
        enabled: true,
        style: {
          fontSize: '1.0em'
        },
        // formatter: function () {
        //   return this.value / 1000000 + 'M';
        // }
      },
      title: {
        text: 'MWh',
        style: {
          fontSize: '1.5em'
        }
      }
    },
    plotOptions: {
      series: {
        borderRadius: 3,
        pointPadding: 0,
        groupPadding: 0.05,
      }
    },
    series: data
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      // ref={chartComponentRef}
      // {...props} 
      />
    </div>
  )
}


