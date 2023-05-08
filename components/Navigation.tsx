'use client'

import Link from "next/link"
//
export default function Navigation() {
  return (
    <nav className="navigation" >
      <Link href="/uebersicht" className="nav-link" >Übersicht</Link>
      <Link href="/jahresdaten" className="nav-link" >Jahresdaten</Link>
      <Link href="/zeitverlauf" className="nav-link" >Zeitverlauf</Link>
    </nav>
  )
}