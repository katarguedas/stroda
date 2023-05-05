'use client'

import { useEffect } from "react"
import BarChart from "./BarChart"
import { useDataCompContext } from "@/lib/provider/dataComparisonContext"
//
type Props = {
  data: number[][] | undefined;
}

export default function ChartViewer({ data }: Props) {

  const { years, isChecked, selectedGroup: selectedGroup } = useDataCompContext();

  console.log("bin im chart Viewer,")
  console.log("folgende Jahre wurden gewählt:")
  isChecked.map((e, index) => {
    if (e) {
      console.log(years[index])
    }
  })


  return (
    <div>
      {/* <BarChart /> */}
    </div>
  )
}