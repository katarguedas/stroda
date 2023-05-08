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

  const wholeYears = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  const name = 'Stromverbrauch';

  console.log(title, subtitle)
  console.log(data)

  const options = {
    chart: {
      type: "column"
    },
    title: {
      text: title,
      style: {
        fontSize: '1.5em'
      }
    },
    subtitle: {
      text: subtitle,
      style: {
        fontSize: '0.9em'
      }
    },
    legend: {
      enabled: false,
      itemStyle: {
        fontSize: '1.25rem'
      }
    },
    xAxis: {
      labels: {
        enabled: true,
        style: {
          fontSize: '1.1em'
        }
      },
      categories: wholeYears,
      tickLength: 1,
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
    series: {
      name: '',
      data: data
    }
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


