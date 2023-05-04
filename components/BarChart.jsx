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

  console.log(data)
  useEffect(() => {
    years.map((year, index) => {
      if (isChecked[index]) {
        console.log(index)
        console.log("year",years[index])
        console.log(data[index])
      setSelectedData([...selectedData, data[index]])
    }
    })
    console.log("selectedData",selectedData)
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
        max: 100
      }
    ],
    plotOptions: {
      series: {
        borderRadius: 3,
        pointPadding: 0,
        groupPadding: 0.05,
      }
    },
    series: [
      {
        pointWidth: 25,
        color: "lightgrey",
        data: [71.5, {
          color: "red",
          y: 89.9,
        }, 16.4, 29.2, 44.0, 76.0, 35.6, 48.5]
      },
      {
        color: "#407bfb",
        data: selectedData[0]
      },
      // {
      //   color: "#407bfb",
      //   data: [0, 70.1]
      // },
    ]
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