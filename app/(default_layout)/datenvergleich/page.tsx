
import BarChart from "@/components/BarChart";
import SelectionPanel1 from "@/components/SelectionPanel1"
import { DataCompContextProvider } from "@/lib/provider/dataComparisonContext"
import getData from "./getData";


export default async function DatenvergleichPage() {


  const allData = await getData();
  // const allData: Alldata;


  return (
    <div>

      <DataCompContextProvider >
        <div className="content" >

          <SelectionPanel1 />
          <div  >
            <BarChart
              {...allData}
            />
          </div>

          <br></br>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus consequatur rerum! Numquam modi, id reici
        </div>
      </DataCompContextProvider >
    </div >
  )
}





