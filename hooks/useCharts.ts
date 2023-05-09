import { useDataContext } from '@/lib/provider/dataContext';

const useCharts = () => {
  const {
    yearIsChecked,
    setYearIsChecked,
    categoryChecked,
    setCategoryChecked,
    setSelectedCategory,
  } = useDataContext();

  
  const resetYears = () => {
    clearYearIsChecked();
  };

  const resetCategory = () => {
    setSelectedCategory('');
  };

  const clearYearIsChecked = () => {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      })
    );
  };

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
