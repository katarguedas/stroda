'use client'
import { SetStateAction, createContext, useContext, useState } from "react"
import useData from "../hooks/useData";

export type ContextCompTypes = {
  years: string[];
  yearIsChecked: boolean[];
  setYearIsChecked: React.Dispatch<SetStateAction<boolean[]>>;
  selectedGroup: string;
  setSelectedGroup: React.Dispatch<SetStateAction<string>>;
  groups: string[];
  categories: string[];
  categoriesLC: string[];
  categoryChecked: boolean[];
  setCategoryChecked: React.Dispatch<SetStateAction<boolean[]>>;
  group: string;
  setGroup: React.Dispatch<SetStateAction<string>>;
}

const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
const groups = ['Stromverbrauch', 'Stromerzeugung', 'installierte Leistung'];
const categories = ['Biomasse', 'Braunkohle', 'Erdgas', 'Kernenergie', 'Photovoltaik', 'Pumpspeicher', 'sonstige Erneuerbare', 'sonstige Konventionelle', 'Steinkohle', 'Wasserkraft', 'Wind Offshore', 'Wind Onshore']
const categoriesLC = ['biomasse', 'braunkohle', 'erdgas', 'kernenergie', 'photovoltaik', 'pumpspeicher', 'sonstigeErneuerbare', 'sonstigeKonventionelle', 'steinkohle', 'wasserkraft', 'windOffshore', 'WindOnshore']


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
  const [yearIsChecked, setYearIsChecked] = useState<boolean[]>(new Array(years.length).fill(false));
  const [categoryChecked, setCategoryChecked] = useState(new Array(categories.length).fill(false));
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [group, setGroup] = useState('');


  return (
    <DataCompContext.Provider
      value={{
        years, groups, categories, categoriesLC, yearIsChecked, setYearIsChecked, categoryChecked, setCategoryChecked, selectedGroup, setSelectedGroup, group, setGroup
      }} >
      {children}
    </DataCompContext.Provider >

  )
}

export { DataCompContextProvider, useDataCompContext }