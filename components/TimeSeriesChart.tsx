'use client'
import { useDataContext } from "@/lib/provider/dataContext";
import useData from "@/hooks/useData";
import { SetStateAction, useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"

//...............................

export default function TimeSeriesChart() {

  const { showChart, selectedGroup, setSearchedCategory, searchedCategory, setShowChart } = useDataContext();
  const [fetchTimeSeriesData] = useData();
  const [chartData, setChartData] = useState<number[][]>(undefined!);

  //..................

  const getChartData = async () => {
    const dat = await fetchTimeSeriesData();
    setChartData(dat);
  }

  useEffect(() => {
    if (showChart) {
      getChartData();
    }
  }, [showChart])

  const reloadStromverbrauch = () => {
    getChartData();
    setShowChart(true);
  }

  useEffect(() => {
    if (selectedGroup === 'Stromerzeugung') {
      setSearchedCategory('');
      setChartData([]);
      setShowChart(false);
    }
    if (selectedGroup === 'Stromverbrauch') {
      setChartData([]);
      setShowChart(false);
      setSearchedCategory('Gesamt');
      reloadStromverbrauch();
    }
  }, [selectedGroup])



  //...............................

  const options = {
    chart: {
      type: "line"
    },
    title: {
      text: '.....',
    },
    subtitle: {
      text: '...',
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%e. %b',
        year: '%b'
      }
    },
    series: [
      {
        name: 'time series',
        type: 'line',
        data: chartData
      }
    ]
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