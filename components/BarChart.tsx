'use client'

import { useDataContext } from "@/lib/provider/dataContext";
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"
import type { Alldata } from "@/types/supabase-myTypes";
import useCharts from "@/hooks/useCharts";

type SelectedState = {
  name: string;
  data: number[];
}

/********************************************
 * TimeSeriesChart
 */

export default function BarChart(
  allData: Alldata
) {

  const { yearIsChecked, selectedGroup, selectedCategory, categories, categoriesLC, years, monthStringArray } = useDataContext();

  const [resetYears, resetCategory] = useCharts();

  const [selectedData, setSelectedData] = useState<SelectedState[]>([]);


  useEffect(() => {
    resetYears();
    setSelectedData([])
  }, [selectedCategory])

  useEffect(() => {
    resetYears();
    resetCategory();
    setSelectedData([])
  }, [selectedGroup])


  const removeData = (year: string) => {
    const tmp = [...selectedData];
    const selected = tmp.filter(e => e.name !== year);
    setSelectedData(selected);
  }

  useEffect(() => {
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
        const catString = category;
        if (selectedCategory === categories[i]) {
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
    }
  }, [yearIsChecked, selectedGroup, selectedCategory])

  //................................................

  const options = {
    chart: {
      type: "column"
    },
    title: {
      text: selectedGroup,
      fontSize: "18.0em"
    },
    subtitle: {
      text: selectedCategory,
      fontSize: '4.0em'
    },
    legend: {
      enabled: true,
      itemStyle: {
        fontSize: '1.2rem'
      }
    },
    xAxis: {
      labels: {
        enabled: true,
        style: {
          fontSize: '1.25em'
        }
      },
      categories: monthStringArray,
      tickLength: 1,

    },
    yAxis: {
      labels: {
        enabled: true,
        style: {
          fontSize: '1.1em'
        },
        // formatter: function () {
        //   return this.value / 1000000 + 'M';
        // }
      },

      title: {
        text: 'TWh',
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
    series: selectedData
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      // {...props} 
      />
    </div>
  )
}
