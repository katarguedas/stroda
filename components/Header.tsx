
import { RiHome3Line } from "react-icons/ri";
//
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div>
      <a className="home-link" href="/"><RiHome3Line /></a>
      <h3>Stromdaten-Viewer Deutschland</h3>
      <Navigation />
    </div>
  )
}