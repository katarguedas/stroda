import HeaderLandingpage from "@/components/HeaderLandingpage"
import Link from "next/link"
import calcAndInsertTimestamp from "@/lib/helpers/supabaseHelper"


export default function Home() {


  return (
    <div>
      <HeaderLandingpage />
      <main >

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aliquam, officiis impedit debitis dignissimos eius tempora ipsum, aut dolores ratione sit eum, natus quod obcaecati maxime nihil libero suscipit incidunt!
        </p>
        <Link href="/uebersicht" className="startlink" >Zum Daten-Viewer</Link>
      </main>
    </div>
  )
}
