'use client';

import { supabase } from '../helpers/supabaseClient';
import { useDataCompContext } from '../provider/dataComparisonContext';

const useData = () => {
  const {
    yearIsChecked,
    setYearIsChecked,
    categoryChecked,
    setCategoryChecked,
  } = useDataCompContext();

  const clearYearIsChecked = () => {
    setYearIsChecked(
      yearIsChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      }),
    );
  };

  const clearCategoryCheck = () => {
    setCategoryChecked(
      categoryChecked.map((e, i) => {
        if (e === true) e = !e;
        return e;
      })
    );
  };

  //
  const getDataForBarChart = async (group: string, year: number) => {
    if (group && group.length > 0) {
      const tableName = getTableName(group);
      console.log('start....');
      const { data, error } = await supabase
        .from(tableName!)
        .select()
        .like('Datum', '%' + year.toString());
      console.log('DATA aus ', tableName, ' \n', data);
      console.log('fertig');
      return data;
    }

    function getTableName(group: string) {
      switch (group) {
        case 'Stromverbrauch':
          return 'Stromverbrauch';
        case 'Stromerzeugung':
          return 'Stromerzeugung_realisiert';
        case 'installierte Leistung':
          return 'Leistung_installiert';
      }
    }
  };

  //
  return [getDataForBarChart];
};

export default useData;
