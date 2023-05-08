import BarChartYearlyData from "@/components/BarChartYearlyData";
import { calcData } from "./calcData";

//
export default async function UebersichtPage() {

  const title = 'Stromverbrauch der letzten Jahre'
  const subtitle = 'in Deutschland'
  const data = await calcData();


  return (
    <div>
      <div className="overview-site"  >
        <div>
          <p style={{ padding: '1.0rem', margin: '1.5rem' }} >
            <br></br>
            Wie sieht der Stromverbrauch in Deutschlandes über dem Jahr verteilt aus? Wie groß sind die Unterschiede zwischen den Winter- und Sommermonaten?
            <br></br>
            <br></br>
            Welche Energieträger versorgen uns mit Strom und wie hoch ist deren Anteil an der gesamten Stromerzeugung? In der Jahresbetrachtung und im zeitlichen Verlauf lassen sich viele Informationen zu unserem Stromverbrauch, zur Stromerzeugung und den verwendeten Energiequellen ablesen. </p>
          <div style={{ margin: '3.0rem' }}  >
            <button  >Zu den Jahresdaten</button>
            <button  >Zu den Zeitverläufen</button>
          </div>
        </div>
        <BarChartYearlyData data={data} title={title} subtitle={subtitle} />
      </div  >

    </div>
  )
}