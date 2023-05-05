import Header from "@/components/Header"
import React from "react";


type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}