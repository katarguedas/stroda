
import BarChart from "@/components/BarChart";
import SelectionPanel1 from "@/components/SelectionPanel1"
import { DataCompContextProvider } from "@/lib/provider/dataComparisonContext"
import { getStromverbrauchData } from "./getData";

// type Props = {
//   params: {
//     years: string[];
//   }
// }

export default async function DatenvergleichPage() {

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];


  const monthDataPerYear = await getStromverbrauchData(years)

  // console.log("data Stromverbrauch", monthDataPerYear)


  return (
    <div>

      <DataCompContextProvider >
        <div className="content" >

          <SelectionPanel1 />
          <div  >
            {/* <ChartViewer data={monthDataPerYear} /> */}
            <BarChart data={monthDataPerYear} years={years} />
          </div>


          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus consequatur rerum! Numquam modi, id reici
        </div>
      </DataCompContextProvider >
    </div >
  )
}


