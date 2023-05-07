
import BarChart from "@/components/BarChart";
import SelectionPanel1 from "@/components/SelectionPanel1"
import { DataContextProvider } from "@/lib/provider/dataContext"
import getData from "./getData";


export default async function DatenvergleichPage() {


  // const allData = await getData();




  return (
    <div>
      <div className="content" >
        <SelectionPanel1 />
        <div>
          <BarChart
          // {...allData}
          />
        </div>

        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus consequatur rerum! Numquam modi, id reici
      </div>
    </div >
  )
}





