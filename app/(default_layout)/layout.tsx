import Header from "@/components/Header"
import React from "react";



type Props = {
  children: React.ReactNode
}

// export default function layout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: {
//     years: string[];
//   };
// }) {


export default function layout({ children }: Props) {

  const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];



  return (
    <div>
      <Header />

      {children}

    </div>
  )
}