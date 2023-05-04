'use client'
import { SetStateAction, createContext, useContext, useState } from "react"
import useData from "../hooks/useData";
import type { StromverbrauchRow, StromerzeugungRow, LeistungRow } from "@/types/supabase-myTypes";

export type ContextCompTypes = {
  years: string[];
  isChecked: boolean[];
  setIsChecked: React.Dispatch<SetStateAction<boolean[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
  categories: string[];
  // oneYearData: StromverbrauchRow[][] | StromerzeugungRow[][] | LeistungRow[][];
  // setOneYearData: React.Dispatch<SetStateAction<StromverbrauchRow[][]>> | React.Dispatch<SetStateAction<StromerzeugungRow[][]>> | React.Dispatch<SetStateAction<LeistungRow[][]>>;
  getDataForBarChart(arg0: string, arg1: number): void;
}

const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
const categories = ['Stromverbrauch', 'Stromerzeugung', 'installierte Leistung'];


const DataCompContext = createContext<ContextCompTypes>(null!)

const useDataCompContext = () => useContext(DataCompContext);


/*****************************
 * DataCompContextProvider
 */

const DataCompContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isChecked, setIsChecked] = useState<boolean[]>(new Array(years.length).fill(false));
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [oneYearData, setOneYearData] = useState
    <StromverbrauchRow[][] | StromerzeugungRow[][] | LeistungRow[][]>([]);

  const [getDataForBarChart] = useData();

  return (
    <DataCompContext.Provider
      value={{
        years: years, isChecked, setIsChecked, selectedCategory, setSelectedCategory, categories,
        // oneYearData, setOneYearData,
        getDataForBarChart
      }} >
      {children}
    </DataCompContext.Provider >

  )
}

export { DataCompContextProvider, useDataCompContext }