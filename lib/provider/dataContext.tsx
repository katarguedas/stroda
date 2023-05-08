'use client'
import { SetStateAction, createContext, useContext, useState } from "react"


export type ContextTypes = {
  years: string[];
  groups: string[];
  categories: string[];
  categoriesLC: string[];
  lastDay: string;
  yearIsChecked: boolean[];
  setYearIsChecked: React.Dispatch<SetStateAction<boolean[]>>;
  selectedGroup: string;
  setSelectedGroup: React.Dispatch<SetStateAction<string>>;
  categoryChecked: boolean[];
  setCategoryChecked: React.Dispatch<SetStateAction<boolean[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
  firstDate: Date;
  setFirstDate: React.Dispatch<SetStateAction<Date>>;
  lastDate: Date;
  setLastDate: React.Dispatch<SetStateAction<Date>>;
  showChart: boolean;
  setShowChart: React.Dispatch<SetStateAction<boolean>>;
  searchedCategory: string;
  setSearchedCategory: React.Dispatch<SetStateAction<string>>
}


const years = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
const groups = ['Stromverbrauch', 'Stromerzeugung'];
const categories = ['Biomasse', 'Braunkohle', 'Erdgas', 'Kernenergie', 'Photovoltaik', 'Pumpspeicher', 'sonstige Erneuerbare', 'sonstige Konventionelle', 'Steinkohle', 'Wasserkraft', 'Wind Offshore', 'Wind Onshore']
const categoriesLC = ['biomasse', 'braunkohle', 'erdgas', 'kernenergie', 'photovoltaik', 'pumpspeicher', 'sonstigeErneuerbare', 'sonstigeKonventionelle', 'steinkohle', 'wasserkraft', 'windOffshore', 'WindOnshore']
const lastDay = "2023-04-29";


const DataContext = createContext<ContextTypes>(null!)

const useDataContext = () => useContext(DataContext);


/*****************************
 * DataCompContextProvider
 */

const DataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [yearIsChecked, setYearIsChecked] = useState<boolean[]>(new Array(years.length).fill(false));
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryChecked, setCategoryChecked] = useState<boolean[]>(new Array(categories.length).fill(false));
  const [firstDate, setFirstDate] = useState<Date>(new Date(lastDay));
  const [lastDate, setLastDate] = useState<Date>(new Date(lastDay));
  const [showChart, setShowChart] = useState(false);
  const [searchedCategory, setSearchedCategory] = useState('');


  return (
    <DataContext.Provider
      value={{
        years, groups, categories, categoriesLC, lastDay,
        yearIsChecked, setYearIsChecked,
        categoryChecked, setCategoryChecked,
        selectedCategory, setSelectedCategory,
        selectedGroup, setSelectedGroup,
        firstDate, setFirstDate, lastDate, setLastDate,
        showChart, setShowChart,
        searchedCategory, setSearchedCategory
      }} >
      {children}
    </DataContext.Provider >

  )
}

export { DataContextProvider, useDataContext }