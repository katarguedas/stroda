'use client'
import { useDataContext } from "@/lib/provider/dataContext";
import useData from "@/hooks/useData";
import useCharts from "@/hooks/useCharts";

import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"

//...............................

type ChartData = {
  name: string;
  type: string;
  data: number[][]
}

/********************************************
 * TimeSeriesChart
 */

export default function TimeSeriesChart() {

  const { selectedGroup, categoryChecked, setShowChart, categories, firstDate, lastDate, setSelectedGroup } = useDataContext();

  const [clearcategoryChecked] = useCharts();
  const [fetchTimeSeriesData] = useData();
  const [chartData, setChartData] = useState<ChartData[]>(undefined!);
  const [fetchedData, setFetchedData] = useState<number[][][]>(undefined!)

  //..................

  useEffect(() => {
    setSelectedGroup('');
  }, [])

  //.........................

  const removeData = (name: string) => {
    const tmp = [...chartData];
    const data = tmp.filter(e => e.name !== name);
    setChartData(data);
  }

  const getChartData = () => {
    const checkData = (name: string) => {
      const index = chartData.findIndex(e => e.name === name);
      if (index > -1)
        return true
      else return false
    }
    if (fetchedData) {
      if (selectedGroup === 'Stromverbrauch') {
        setChartData([{ name: 'Stromverbrauch gesamt', type: 'line', data: fetchedData[0] }]);
      }
      if (selectedGroup === "Stromerzeugung") {

        categories.map((category, index) => {
          if ((categoryChecked[index]) && (checkData(category) === false)) {
            setChartData([...chartData, { name: category, type: 'line', data: fetchedData[index] }])
          } else if ((!categoryChecked[index]) && (checkData(category) === true)) {
            removeData(category);
          }
        })
      }
    }
  }

  const fetchData = async () => {
    const dat = await fetchTimeSeriesData();
    setFetchedData(dat);
  }

  //.....................................

  useEffect(() => {
    getChartData();
  }, [fetchedData])

  useEffect(() => {
    setChartData([]);
    if (selectedGroup)
      fetchData();
  }, [firstDate, lastDate, selectedGroup])


  useEffect(() => {
    getChartData();
  }, [categoryChecked])

  const reloadStromverbrauch = () => {
    getChartData();
    setShowChart(true);
  }

  useEffect(() => {
    if (selectedGroup === 'Stromerzeugung') {
      clearcategoryChecked();
      setChartData([]);
      setShowChart(false);
    }
    if (selectedGroup === 'Stromverbrauch') {
      setChartData([]);
      setShowChart(false);
      reloadStromverbrauch();
    }
  }, [selectedGroup])

  //...............................

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: selectedGroup,
    },
    subtitle: {
      text: '...',
    },
    plotOptions: {
      series: {
        lineWidth: 2,
        states: {
          // hover: {
          //   lineWidth: 3
          // }
        },
        // marker: {
        //   enabled: false
        // },
      },
    },
    legend: {
      itemStyle: {
        fontSize: '1.15rem'
      }
    },
    yAxis: {
      type: 'linear',
      title: {
        text: 'MWh',
        style: {
          fontSize: '1.25em'
        }
      },
      label: {
        enabled: true,
        format: 'Value: {point.y:.2f}',
        style: {
          fontSize: '1.5rem'
        }
      }
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b'
      }
    },
    series: chartData
  }

  //...............................

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
