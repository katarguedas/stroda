'use client'

import { useDataCompContext } from "@/lib/provider/dataComparisonContext";
import { useRef, useEffect, useState, SetStateAction } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"
import type { Alldata, Leistung, Stromverbrauch, Stromerzeugung } from "@/types/supabase-myTypes";


// type Props = {
//   stromverbrauchData: Stromverbrauch;
//   stromerzeugungData: Stromerzeugung;
//   leistungData: Leistung;
// }

type SelectedState = {
  name: string;
  data: number[];
}

export default function BarChart(
  allData: Alldata
  // stromverbrauchData: number[][], 
  // stromerzeugungData: Stromerzeugung, 
  // leistungData: Leistung
) {

  const { years, yearIsChecked, setYearIsChecked, selectedGroup, group, setGroup, categoryChecked, categoriesLC } = useDataCompContext();

  // const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const [selectedData, setSelectedData] = useState<SelectedState[]>([]);


  const getGroupString = (value: string): string => {
    if (value === 'Stromverbrauch')
      return 'stromverbrauch';
    if (value === 'Stromerzeugung')
      return 'stromerzeugung';
    if (value === 'installierte Leistung')
      return 'leistung';
    return '';
  }

  useEffect(() => {
    setGroup(getGroupString(selectedGroup))
  }, [])


  const removeData = (year: string) => {
    const tmp = [...selectedData];
    const selected = tmp.filter(e => e.name !== year);
    setSelectedData(selected);
  }


  useEffect(() => {
    // const string = 'biomasse'
    // const { ...gesamt } = allData;
    // console.log("gesamt1: ", gesamt[0])
    // console.log("gesamt2: ", gesamt[1])
    // console.log("gesamt3: ", gesamt[2])

    // console.log("teile von ges1:", allData[0].gesamt[0])
    // console.log("teile von ges1:", allData[0]['gesamt'][0][0])

    // console.log("teile von ges2:", allData[1][string][0][0])
    // console.log("teile von ges2:", allData[1]['biomasse'][0]) 

    if (selectedGroup === 'Stromverbrauch') {
      years.map((year, index) => {
        if ((yearIsChecked[index]) && (!selectedData.find(e => e.name === year))) {
          setSelectedData([...selectedData, { name: year, data: allData[0]['gesamt'][index] }])
        } else if (!yearIsChecked[index]) {
          if (selectedData.find(e => e.name === year)) {
            removeData(year)
          }
        }
      })
    } else if (selectedGroup === 'Stromerzeugung') {
      categoriesLC.map((category, i) => {
        // const catString = 'biomasse';
        const catString = category;
        if (categoryChecked[i]) {
          years.map((year, index) => {
            if ((yearIsChecked[index]) && (!selectedData.find(e => e.name === year))) {
              //@ts-ignore
              setSelectedData([...selectedData, { name: year, data: allData[1][catString][index] }])
            } else if (!yearIsChecked[index]) {
              if (selectedData.find(e => e.name === year)) {
                removeData(year)
              }
            }
          })
        }
      })

      //
    } else if (selectedGroup === 'installierte Leistung') {
      //
    }


  }, [yearIsChecked, selectedGroup, categoryChecked])


  const clearYearIsChecked = () => {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      }),
    );
  };

  useEffect(() => {
    clearYearIsChecked();
    setSelectedData([]);
    console.log("checks: ", yearIsChecked)
  }, [selectedGroup])

  const options = {
    chart: {
      type: "column"
    },
    xAxis: {
      labels: {
        enabled: true,
      },
      categories:
        ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
      ,
      tickLength: 1
    },
    yAxis: [
      {
        // max: 100
      }
    ],
    plotOptions: {
      series: {
        borderRadius: 3,
        pointPadding: 0,
        groupPadding: 0.05,
      }
    },
    series: selectedData
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