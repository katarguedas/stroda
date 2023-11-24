import {useCallback} from 'react'
import { useDataContext } from '@/lib/provider/dataContext';

const useCharts = () => {
  const {
    yearIsChecked,
    setYearIsChecked,
    categoryChecked,
    setCategoryChecked,
    setSelectedCategory,
  } = useDataContext();


  const resetCategory = () => {
    setSelectedCategory('');
  };

 const clearYearIsChecked = useCallback(function clearYearIsChecked ()  {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      })
    );
 }, [setYearIsChecked, yearIsChecked]);
  
  
 const resetYears: Function = useCallback<Function>(function resetYears() {
  clearYearIsChecked();
},[clearYearIsChecked]);


  const clearcategoryChecked = () => {
    setCategoryChecked(
      categoryChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      })
    );
  };

  return [clearYearIsChecked, clearcategoryChecked, resetYears, resetCategory];
};

export default useCharts;
