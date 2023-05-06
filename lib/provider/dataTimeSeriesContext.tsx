// 'use client'
// import { SetStateAction, createContext, useContext, useState } from "react"
// import { useStaticDataContext } from "./staticDataProvider";

// export type ContextTimeSeriesTypes = {
//   years: string[];
//   yearIsChecked: boolean[];
//   setYearIsChecked: React.Dispatch<SetStateAction<boolean[]>>;
//   selectedGroup: string;
//   setSelectedGroup: React.Dispatch<SetStateAction<string>>;
//   groups: string[];
//   categories: string[];
//   categoriesLC: string[];
//   // categoryChecked: boolean[];
//   // setCategoryChecked: React.Dispatch<SetStateAction<boolean[]>>;
//   selectedCategory: string;
//   setSelectedCategory: React.Dispatch<SetStateAction<string>>;
// }





// const TimeSeriesContext = createContext<ContextTimeSeriesTypes>(null!)

// const useTimeSeriesContext = () => useContext(TimeSeriesContext);


// /*****************************
//  * DataCompContextProvider
//  */

// const TimeSeriesContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {

//   const { years, groups, categories, categoriesLC } = useStaticDataContext()

//   const [yearIsChecked2, setYearIsChecked2] = useState<boolean[]>(new Array(years.length).fill(false));
//   // const [categoryChecked, setCategoryChecked] = useState(new Array(categories.length).fill(false));
//   const [selectedGroup2, setSelectedGroup2] = useState<string>('');
//   const [selectedCategory, setSelectedCategory] = useState('');


//   return (
//     <TimeSeriesContext.Provider
//       value={{
//         years, groups, categories, categoriesLC, yearIsChecked, setYearIsChecked,
//         // categoryChecked, setCategoryChecked, 
//         selectedCategory, setSelectedCategory,
//         selectedGroup, setSelectedGroup,
//       }} >
//       {children}
//     </TimeSeriesContext.Provider >

//   )
// }

// export { TimeSeriesContextProvider, useTimeSeriesContext }