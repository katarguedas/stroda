'use client'
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"

type Props = {
  data: number[];
  title: string;
  subtitle: string;
}

/*******************************
 *  BarChartYearlyData
 */

export default function BarChartYearlyData(
  { data, title, subtitle }: Props
) {


  const wholeYears = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

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
      data: data,
      accessibility: {
        description: ''
      }
    }
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}


