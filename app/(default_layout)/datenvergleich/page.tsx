
import BarChart from "@/components/BarChart";
import SelectionPanel1 from "@/components/SelectionPanel1"
import { DataCompContextProvider } from "@/lib/provider/dataComparisonContext"
import { getData } from "./getData";

import type { Alldata, Leistung, Stromverbrauch, Stromerzeugung } from "@/types/supabase-myTypes";

// type Props = {
//   params: {
//     years: string[];
// groups: string[];
//   }
// }


export default async function DatenvergleichPage() {

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  const groups = ['Stromverbrauch', 'Stromerzeugung', 'installierte Leistung'];
  // const categories = ['Biomasse', 'Braunkohle', 'Erdgas', 'Kernenergie', 'Photovoltaik', 'Pumpspeicher', 'sonstige Erneuerbare', 'sonstige Konventionelle', 'Steinkohle', 'Wasserkraft', 'Wind Offshore', 'Wind Onshore']


  const allData: Alldata = [
    {
      gesamt: await getData(groups[0], years, 'Gesamt'),
    },
    {
      biomasse: await getData(groups[1], years, 'Biomasse'),
      wasserkraft: await getData(groups[1], years, 'Wasserkraft'),
      windOffshore: await getData(groups[1], years, 'Wind Offshore'),
      windOnshore: await getData(groups[1], years, 'Wind Onshore'),
      photovoltaik: await getData(groups[1], years, 'Photovoltaik'),
      kernenergie: await getData(groups[1], years, 'Kernenergie'),
      braunkohle: await getData(groups[1], years, 'Braunkohle'),
      steinkohle: await getData(groups[1], years, 'Steinkohle'),
      erdgas: await getData(groups[1], years, 'Erdgas'),
      pumpspeicher: await getData(groups[1], years, 'Pumpspeicher'),
      sonstigeErneuerbare: await getData(groups[1], years, 'Sonstige Erneuerbare'),
      sonstigeKonventionelle: await getData(groups[1], years, 'Sonstige Konventionelle'),
    },
    {
      biomasse: await getData(groups[2], years, 'Biomasse'),
      wasserkraft: await getData(groups[2], years, 'Wasserkraft'),
      windOffshore: await getData(groups[2], years, 'Wind Offshore'),
      windOnshore: await getData(groups[2], years, 'Wind Onshore'),
      photovoltaik: await getData(groups[2], years, 'Photovoltaik'),
      kernenergie: await getData(groups[2], years, 'Kernenergie'),
      braunkohle: await getData(groups[2], years, 'Braunkohle'),
      steinkohle: await getData(groups[2], years, 'Steinkohle'),
      erdgas: await getData(groups[2], years, 'Erdgas'),
      pumpspeicher: await getData(groups[2], years, 'Pumpspeicher'),
      sonstigeErneuerbare: await getData(groups[2], years, 'Sonstige Erneuerbare'),
      sonstigeKonventionelle: await getData(groups[2], years, 'Sonstige Konventionelle'),
    }
  ]

  console.log("DATA:", allData[0]['gesamt'])
  console.log("DATA2:", allData[1]['biomasse'][0])
  // console.log("DATA2:", allData[1].biomasse[0])


  // 
  // const stromverbrauchData = await getData(groups[0], years, 'Gesamt');
  // const stromerzeugungData = {
  //   biomasse: await getData(groups[1], years, 'Biomasse'),
  //   braunkohle: await getData(groups[1], years, 'Braunkohle'),
  //   erdgas: await getData(groups[1], years, 'Erdgas'),
  // }
  // const leistungData = {
  //   biomasse:await getData(groups[1], years, 'Biomasse'),
  //   braunkohle: await getData(groups[1], years, 'Braunkohle'),
  //   erdgas: await getData(groups[1], years, 'Erdgas'),
  // }


  return (
    <div>

      <DataCompContextProvider >
        <div className="content" >

          <SelectionPanel1 />
          <div  >
            {/* <ChartViewer data={monthDataPerYear} /> */}
            <BarChart
              // stromverbrauchData={stromverbrauchData}
              // stromerzeugungData={stromerzeugungData}
              // leistungData={leistungData}
              {...allData}
            />
          </div>


          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus consequatur rerum! Numquam modi, id reici
        </div>
      </DataCompContextProvider >
    </div >
  )
}





