import SelectionPanel2 from "@/components/SelectionPanel2"
import TimeSeriesChart from "@/components/TimeSeriesChart";

//
export default function ZeitverlaufPage() {



  return (
    <div>
      <div className="content" >
        <p className="site-title" >Zeitverlauf</p>
        <SelectionPanel2 />
        <TimeSeriesChart />
      </div>

    </div>
  )
}