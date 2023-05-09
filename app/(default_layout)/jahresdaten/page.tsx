
import BarChart from "@/components/BarChart";
import SelectionPanel1 from "@/components/SelectionPanel1"
import GetData from "./getData";


export default async function JahresdatenPage() {

  const allData = await GetData();
  // console.log("ALL DATA:", allData)

  return (
    <div>
      <div className="content" >
        <p className="site-title" >Jahresdaten</p>
        <SelectionPanel1 />
        <div>
          <BarChart
            {...allData}
          />
        </div>

        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus consequatur rerum! Numquam modi, id reici
      </div>
    </div >
  )
}





