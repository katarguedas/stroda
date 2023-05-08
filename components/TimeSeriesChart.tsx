'use client'
import { useDataContext } from "@/lib/provider/dataContext";
import useData from "@/hooks/useData";
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"

//...............................

type ChartData = {
  name: string;
  type: string;
  data: number[][]
}

export default function TimeSeriesChart() {

  const { showChart, selectedGroup, categoryChecked, setCategoryChecked, setShowChart, categories, firstDate, lastDate, setSelectedGroup } = useDataContext();
  const [fetchTimeSeriesData] = useData();
  const [chartData, setChartData] = useState<ChartData[]>(undefined!);
  const [fetchedData, setFetchedData] = useState<number[][][]>(undefined!)

  //..................

  useEffect(() => {
    setSelectedGroup('');
  }, [])

  const removeData = (name: string) => {
    const tmp = [...chartData];
    const data = tmp.filter(e => e.name !== name);
    setChartData(data);
  }

  const getChartData = () => {

    const checkData = (name: string) => {
      console.log("NAME der kategorie:", name)
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
            console.log("---INDEX:---", index)
            console.log("Kategorie: ", category, "DATA:", fetchedData[index])
            setChartData([...chartData, { name: category, type: 'line', data: fetchedData[index] }])
          } else if ((!categoryChecked[index]) && (checkData(category) === true)) {
            removeData(category);
          }
        })
      }
    }
  }

  // const getChartData = () => {
  //   if (fetchedData) {
  //     if (selectedGroup === 'Stromerzeugung') {
  //       categoryChecked.map((e, i) => {
  //         if (e === true) {
  //           console.log(e)
  //           console.log("Kategorie zum Plotten:", categories[i])
  //           console.log("INDEX:", i)
  //           setChartData([...chartData,
  //           { name: categories[i], type: 'line', data: fetchedData[i] }]);
  //         } else if (e === false) {
  //           console.log("INDEX von 'false'", i, e)
  //           console.log(chartData)
  //           console.log(categories[i], chartData.findIndex((e, i) => e.name === categories[i]))
  //           if (chartData.findIndex((e, i) => e.name === categories[i]) !== -1) {
  //             console.log("GEFUNDEN IN DEN DATEN", chartData.findIndex((e, i) => e.name === categories[i]))
  //             removeChartData(categories[chartData.findIndex((e, i) => e.name === categories[i])]);
  //           }
  //         }
  //       });
  //     } else if (selectedGroup === 'Stromverbrauch') {
  //       setChartData([{ name: 'Stromverbrauch gesamt', type: 'line', data: fetchedData[0] }])
  //     }
  //   }
  // }

  const fetchData = async () => {
    const dat = await fetchTimeSeriesData();
    setFetchedData(dat);
  }

  useEffect(() => {
    console.log("FetchedDATA;", fetchedData)
    getChartData();
  }, [fetchedData])

  useEffect(() => {
    setChartData([]);
    if (selectedGroup)
      fetchData();
  }, [firstDate, lastDate, selectedGroup])


  const clearcategoryChecked = () => {
    setCategoryChecked(
      categoryChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      }),
    );
  };


  // useEffect(() => {
  //   if (showChart) {
  //     getChartData();
  //   }
  // }, [showChart])

  useEffect(() => {
    if (chartData)
      console.log("geladene Daten", chartData)
  }, [chartData])


  useEffect(() => {
    console.log("CATEGORY CHECKED:", categoryChecked)
    getChartData();
  }, [categoryChecked])

  const reloadStromverbrauch = () => {
    getChartData();
    setShowChart(true);
  }

  useEffect(() => {
    if (selectedGroup === 'Stromerzeugung') {
      // setSearchedCategory('');
      clearcategoryChecked();
      setChartData([]);
      setShowChart(false);
    }
    if (selectedGroup === 'Stromverbrauch') {
      setChartData([]);
      setShowChart(false);
      // setSearchedCategory('Gesamt');
      reloadStromverbrauch();
    }
  }, [selectedGroup])


  //------------------------------


  //...............................

  const options = {
    chart: {
      type: "line"
    },
    title: {
      text: selectedGroup,
    },
    subtitle: {
      text: '...',
    },
    yAxis: {
      title: {
        text: 'MWh',
        style: {
          fontSize: '1.5em'
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
