'use client'

import Link from "next/link"
//
export default function Navigation() {
  return (
    <nav className="navigation" >
      <Link href="/uebersicht" className="nav-link" >Übersicht</Link>
      <Link href="/datenvergleich" className="nav-link" >Datenvergleich</Link>
      <Link href="/zeitverlauf" className="nav-link" >Zeitverlauf</Link>
      {/* <button>Zeitverlauf</button> */}
    </nav>
  )
}