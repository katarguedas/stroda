'use client'

import { useDataCompContext } from "@/lib/provider/dataComparisonContext";
import { useRef, useEffect, useState, SetStateAction } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official"
import { type } from "os";

// type Props = {
//   data: number[][];
// }

// type selectedState = {
//   selectedData: number[][];
//   setSelectedData: React.Dispatch<SetStateAction<number[][]>>
// }


//
export default function BarChart({ data }) {
// export default function BarChart({ data }: Props) {

  const { years, isChecked, selectedCategory } = useDataCompContext();

  // const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // const [selectedData, setSelectedData] = useState<selectedState>();
  const [selectedData, setSelectedData] = useState([]);

  const removeData = (year) =>{
    const tmp=[...selectedData];
      const selected = tmp.filter(e => e.name !== year);
      console.log("res: ", selected);
      setSelectedData(selected);
  }

  useEffect(() => {
    years.map((year, index) => {
      if ((isChecked[index]) & (!selectedData.find(e => e.name === year))) {
      setSelectedData([...selectedData, {name: year, data: data[index]}])
    } else if (!isChecked[index]) {
      if (selectedData.find(e => e.name === year)) {
      removeData(year)
      }
    }  
    })
    // console.log("selectedData:  \n",selectedData)
  }, [isChecked, selectedCategory])



  const options = {
    chart: {
      type: "column"
    },
    xAxis: {
      labels: {
        enabled: true
      },
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