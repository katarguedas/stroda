'use client'

import { useEffect, useState } from "react"
import BarChart from "./BarChart"
import { useDataCompContext } from "@/lib/provider/dataComparisonContext"
import type { Alldata } from "@/types/supabase-myTypes";
//

type SelectedState = {
  name: string;
  data: number[];
}


export default function ChartViewer(allData: Alldata) {

  const { years, yearIsChecked, setYearIsChecked, selectedGroup, setSelectedGroup, selectedCategory, setSelectedCategory, categories, categoriesLC } = useDataCompContext();

  // const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const [selectedData, setSelectedData] = useState<SelectedState[]>([]);


  const clearYearIsChecked = () => {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      }),
    );
  };

  const resetYears = () => {
    clearYearIsChecked();
  }
  const resetCategory = () => {
    setSelectedCategory('');
  }
  const resetGroup = () => {
    setSelectedGroup('');
  }

  useEffect(() => {
    resetYears();
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
        console.log(category)
        console.log("selectedCategory: ", selectedCategory)
        if (selectedCategory === categories[i]) {
          console.log("Category: ", selectedCategory)
          years.map((year, index) => {
            console.log("Jahr: ", year)
            console.log("selectedData: ", selectedData)
            if ((yearIsChecked[index]) && (!selectedData.find(e => e.name === year))) {
              console.log("daten setzen für das Jahr: ", year)
              //@ts-ignore
              setSelectedData([...selectedData, { name: year, data: allData[1][catString][index] }])
            } else if (!yearIsChecked[index]) {
              if (selectedData.find(e => e.name === year)) {
                console.log("Jahr wird entfernt", year)
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

  }, [yearIsChecked, selectedGroup, selectedCategory])


  useEffect(() => {
    console.log("SelectedData:", selectedData)


  }, [selectedData])


  return (
    <div>
      <BarChart
      selectedData={selectedData}
      //  {...selectedData}
        />
    </div>
  )
}