import BarChartYearlyData from "@/components/BarChartYearlyData";
import { calcData } from "./calcData";

//
export default async function UebersichtPage() {


  const title = 'Stromverbrauch'
  const subtitle = 'Jahresdaten'
  // const data = await calcData();


  return (
    <div className="chart"  >
      {/* <BarChartYearlyData data={data} title={title} subtitle={subtitle} /> */}
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi amet sint inventore quae voluptatibus aperiam, a voluptas repellendus? Repudiandae debitis repellat culpa natus ab iure voluptatem non praesentium omnis aut?</p>
    </div>
  )
}