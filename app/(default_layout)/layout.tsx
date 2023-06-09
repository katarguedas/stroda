import '../../sass/style.scss';
import Header from "@/components/Header"
import React from "react";
import { DataContextProvider } from '@/lib/provider/dataContext';



type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {

  return (
    <div>
      <Header />
      <DataContextProvider >
        {children}
      </DataContextProvider>
    </div>
  )
}